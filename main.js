const Database = require("better-sqlite3");

const db = new Database("google_transit/database.db", {
  readonly: true,
});

/*
Note: when selecting run, make sure it runs on correct day
Steps:
0. Select day
1. Select departure station
2. Select start time
3. Select first run after start time (trip_id)
4. Find time when trip gets to destination station
4a. Check if we can "transfer" to the next destination station
5. Select first run to next destination station after trip arrives (use stop_headsign)
6. Repeat 4 and 5

Note: can do this const result = row ?? { time: "NO_RESULT" }; if row doesn't exist
*/
// 63rd: 30177 (to howard) 30178 (to 95th)
// green line split: 100
// garfield: 30100 (63rd) 30099 (harlem)
// temporary: pace bus split: 101
// temporary: 81 bus split: 102
// temporary: 54B bus split: 103
// 15761, 

//let route = [30204, 30176, 30174, 30089, 30088, 30177, 100, 30099, 30004, 101, 30076, 30171, 30172, 30248, 14102, 3746, 30250, 30075, 30074, 30182, 15761, 14193, 30113, 30199];
//let route = [30204, 30176, 30175, 30026, 30027, 30176, 30174, 30089, 30088, 30177, 3229, 3246, 30056, 30183, 15879, 3442, 30140, 30004, 101, 30076, 30171, 30172, 30248, 14102, 3746, 30250, 30075, 30074, 30182, 15761, 14193, 30113, 30199];
let route = [30200, 30114, 14193, 14123, 30181, 30074, 30075, 30249, 3804, 14102, 30247, 30171, 30172, 30077, 101, 30003, 30139, 16077, 3246, 30057, 30184, 15879, 3429, 30178, 30089, 30088, 30173, 30175, 30026, 30027, 30176, 30175, 30203]; // polk start, via cottage first (8:40 at 7:45 on friday)
//let route = [30200, 30114, 14193, 14123, 30181, 30074, 30075, 30249, 3804, 14102, 30247, 30171, 30172, 30077, 101, 30003, 30057, 3412, 3442, 30140, 30218, 3222, 3229, 30178, 30089, 30088, 30173, 30175, 30026, 30027, 30176, 30175, 30203]; // polk start, via ashland first (8:45 at 8:45 on friday)
//                                                                                                               gs begin ^                                              ^ gs end (30178 is red)
//let route = [30204, 30176, 30175, 30026, 30027, 30176, 30174, 30089, 30088, 30177, 3229, 3246, 30056, 30183, 15879, 3442, 30140, 30080, 30081, 30182, 15761, 14193, 30113, 30199, 6691, 18336, 30093, 30077, 101, 30003, 30074, 30075, 30249, 3804, 17038, 14102, 30247, 30171, 30172, 30069];
let initialDay = "friday";
let bestTime = "10:00:00";
let bestTimeStart = "Undefined";

const splitTimeConstant = 3;

const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

for (let h = 7; h < 8; h++) {
  let hp = h.toString();
  if (h < 10) {
    hp = "0" + h.toString();
  }
  for (let i = 45; i < 50; i += 5) {
    let j = i.toString();
    if (i < 10) {
      j = "0" + i.toString();
    }
    let t = hp + ":" + j + ":00";
    let totalTime = calcRouteAtTimeAndDay(t, initialDay);
    let bestTimeSplit = bestTime.split(":");
    let totalTimeSplit = totalTime.split(":");
    if (totalTimeSplit[0] * 3600 + totalTimeSplit[1] * 60 + totalTimeSplit[2] < bestTimeSplit[0] * 3600 + bestTimeSplit[1] * 60 + bestTimeSplit[0]) {
      bestTime = totalTime;
      bestTimeStart = t;
    }
  }
}

console.log("The best time to start on", initialDay, "is", green, bestTimeStart, reset, "taking", green, bestTime, reset);

function calcRouteAtTimeAndDay(startTime, day) {
  console.log("Started calcuation for", day, "at", startTime);
  let time = startTime;
  let at = 0;
  while (at < route.length - 1) {
    let current = route[at];
    let next = route[at + 1];
    at++;
    if (next == 101) {
      // this is effectively the pace 318 schedule, it assumes midday which is the case for the 318 in almost all routes
      at++;
      let split = time.split(":");
      split[0] = parseInt(split[0]);
      split[1] = parseInt(split[1]);
      let arrivalMinutes = [5, 20, 35, 50, 65]; // nice workaround
      for (let i = 0; i < arrivalMinutes.length; i++) {
        if (arrivalMinutes > split[1]) {
          split[1] += (arrivalMinutes - split[1]) + 7;
          break;
        }
      }
      if (split[1] > 60) {
        split[1] -= 60;
        split[0]++;
      }
      if (split[0] < 10) {
        split[0] = "0" + split[0];
      }
      if (split[1] < 10) {
        split[1] = "0" + split[1];
      }
      time = split.toString().replaceAll(",", ":");
      //console.log("Executed pace 318 split and burnt 30 minutes of time, current time is now", time);
      continue;
    }
    if (canTransfer(current, next)) {
      //console.log("Transferred from", current, "to", next);
      continue;
    }
    let departures = getNextFifteenDeparturesFromStopAfterTime(current, time);
    // console.log("Currently at " + current);
    let trip = 0;
    for (let i = 0; i < departures.length; i++) {
      if (doesRunGoToStop(departures[i], next) && doesTripRunOnDay(day, departures[i])) {
        trip = departures[i];
        break;
      }
    }
    if (trip == 0) {
      console.error("Failed to find trip. Exiting...");
      return;
    }
    console.log("Selected run #", getRunNumberFromTripId(trip).replaceAll("R", ""), "at", arrivalTimeOfTripAtStop(trip, current), "to go from", getStopNameFromId(current), "to", getStopNameFromId(next));
    time = arrivalTimeOfTripAtStop(trip, next);
    //console.log("The trip arrived at", time);
    let split = time.split(":");
    split[0] = parseInt(split[0]);
    split[1] = parseInt(split[1]);
    if(current == 30171){
      split[1] += 6; // bathroom break at ohare
    }
    else{
      split[1] += splitTimeConstant;
    }
    if (split[1] > 59) {
      split[1] -= 60;
      split[0]++;
    }
    if (split[0] < 10) {
      split[0] = "0" + split[0];
    }
    if (split[1] < 10) {
      split[1] = "0" + split[1];
    }
    time = split.toString().replaceAll(",", ":");
  }

  let startSplit = startTime.split(":");
  let endSplit = time.split(":");
  let splitTime = [endSplit[0] - startSplit[0], endSplit[1] - startSplit[1], endSplit[2] - startSplit[2]];
  if (splitTime[2] < 0) {
    splitTime[2] += 60;
    splitTime[1]--;
  }
  if (splitTime[1] < 0) {
    splitTime[1] += 60;
    splitTime[0]--;
  }
  if (splitTime[0] < 10) {
    splitTime[0] = "0" + splitTime[0];
  }
  if (splitTime[1] < 10) {
    splitTime[1] = "0" + splitTime[1];
  }
  if (splitTime[2] < 10) {
    splitTime[2] = "0" + splitTime[2];
  }
  splitTime = splitTime.toString().replaceAll(",", ":")
  console.log("Routing starting at", startTime, "on", day, "took", green, splitTime, reset);
  return splitTime;
}

function arrivalTimeOfTripAtStop(trip, stop) {
  const stmt = db.prepare(`
    SELECT arrival_time 
    FROM Times 
    WHERE trip_id = ${trip} 
    AND stop_id = ${stop}
  `);

  const time = stmt.get();
  return time["arrival_time"];
}

function canTransfer(from, to) {
  const stmt = db.prepare(`
      SELECT *
      FROM Transfers
      WHERE (from_stop_id = ${from}
      AND to_stop_id = ${to}) OR (from_stop_id = ${to} AND to_stop_id = ${from})
  `);

  const rows = stmt.get();
  return rows ? true : false;
}

function getRunNumberFromTripId(tripId){
  const stmt = db.prepare(`
    SELECT schd_trip_id 
    FROM Trips 
    WHERE trip_id = ${tripId}
  `);

  const run = stmt.get();
  return run["schd_trip_id"];
}

function getStopNameFromId(stopId){
  const stmt = db.prepare(`
    SELECT stop_name 
    FROM Stops 
    WHERE stop_id = ${stopId}
  `);

  const run = stmt.get();
  return run["stop_name"];
}

function doesRunGoToStop(trip, stop) {
  const stmt = db.prepare(`
      SELECT * 
      FROM Times 
      WHERE trip_id = ${trip} 
      AND stop_id = ${stop}
  `);

  const rows = stmt.all();
  return rows.length != 0;
}

function doesTripRunOnDay(day, trip) {
  const stmt = db.prepare(`
      SELECT service_id
      FROM Trips
      WHERE trip_id = ${trip}
  `);

  const serviceId = stmt.get()["service_id"];

  const stmt3 = db.prepare(`
      SELECT * 
      FROM Calendar
      WHERE service_id = ${serviceId}
  `);

  return stmt3.get()[day] == 1;
}

function getNextFifteenDeparturesFromStopAfterTime(stop, time) {
  const stmt = db.prepare(`
      SELECT trip_id 
      FROM Times 
      WHERE departure_time >= '${time}'
      AND stop_id = ${stop}
      ORDER BY departure_time
      LIMIT 25;
  `);

  const rows = stmt.all();
  const ids = [];
  rows.forEach(row => {
    ids.push(row["trip_id"]);
  })
  return ids;
}
