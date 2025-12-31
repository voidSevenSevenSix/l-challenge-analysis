const Database = require("better-sqlite3");

const db = new Database("google_transit/database.db", {
  readonly: true,
});

let route = [30204, 30176, 30175, 30026, 30027, 30176, 30174, 30089, 30088, 30177, 3229, 3246, 30056, 30183, 15879, 3442, 30140, 30099, 30004, 101, 30076, 30171, 30172, 30248, 14102, 3746, 30250, 30075, 30074, 30182, 15761, 14193, 30113, 30199];
let initialDay = "sunday";
let initialTime = "09:50:00";

const splitTimeConstant = 2;

const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

calcRouteAtTimeAndDay(initialTime, initialDay);

function calcRouteAtTimeAndDay(startTime, day) {
  console.log("Started calcuation for", green, day, reset, "at", green, startTime, reset);
  let time = startTime;
  let at = 0;
  while (at < route.length - 1) {
    let current = route[at];
    let next = route[at + 1];
    at++;
    if (next == 101) {
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
      console.log("Executed pace " + green + "318" + reset + " split and burnt 30 minutes of time, current time is now", green, time, reset);
      continue;
    }
    if (canTransfer(current, next)) {
      console.log("Transferred from", green, getStopNameFromId(current), reset, "to", green, getStopNameFromId(next), reset);
      continue;
    }
    let departures = getNextFifteenDeparturesFromStopAfterTime(current, time);
    let trip = 0;
    for (let i = 0; i < departures.length; i++) {
      if (doesRunGoToStop(departures[i], next) && doesTripRunOnDay(day, departures[i])) {
        trip = departures[i];
        break;
      }
    }
    if (trip == 0) {
      console.error(red, "Failed to find trip. Exiting...", reset);
      return;
    }
    console.log("Selected", green, getRouteFromTripId(trip), reset ,"line trip", trip, "(" + green + getRunNumberFromTripId(trip) + reset + ") at", green, arrivalTimeOfTripAtStop(trip, current), reset, "to go from", green, getStopNameFromId(current), reset ,"to", green, getStopNameFromId(next), reset);
    time = arrivalTimeOfTripAtStop(trip, next);
    console.log("The trip arrived at", time);
    // Add 6 minutes per transfer
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
  console.log("Routing starting at", green, startTime, reset, "on", green, day, reset, "took", green, splitTime, reset);
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
      LIMIT 15;
  `);

  const rows = stmt.all();
  const ids = [];
  rows.forEach(row => {
    ids.push(row["trip_id"]);
  })
  return ids;
}

function getStopNameFromId(stopId){
    const stmt = db.prepare(`
        SELECT stop_name FROM Stops WHERE stop_id = ${stopId};
    `);

    const row = stmt.get();
    return row["stop_name"];
}

function getRunNumberFromTripId(tripId){
    const stmt = db.prepare(`
    SELECT schd_trip_id FROM Trips WHERE trip_id = ${tripId};
    `);

    const row = stmt.get();
    return row["schd_trip_id"];
}

function getRouteFromTripId(tripId){
    const stmt = db.prepare(`
    SELECT route_id FROM Trips WHERE trip_id = ${tripId};
    `);

    const row = stmt.get();
    let id = row["route_id"];
    if(id == "G"){
        id = "Green";
    }
    if(id == "P"){
        id = "Purple";
    }
    if(id == "Org"){
        id = "Orange";
    }
    if(id == "Brn"){
        id = "Brown";
    }
    if(id == "Y"){
        id = "Yellow";
    }
    return id;
}