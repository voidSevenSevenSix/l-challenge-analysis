const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

let routeId = "81";
let direction = "East";
let stopNameContains = "Kimball (Brown";

const stmt = db.prepare(`
    SELECT trip_id 
    FROM Trips 
    WHERE route_id = ${routeId} 
    AND direction = '${direction}' 
    LIMIT 1
`);

const tripId = stmt.get()["trip_id"];
const stmt2 = db.prepare(`
    SELECT stop_id 
    FROM Stops 
    WHERE stop_name 
    LIKE '%${stopNameContains}%';    
`)

const stopIds = stmt2.all();
stopIds.forEach(id => {
    const stmt3 = db.prepare(`
        SELECT * 
        FROM Times 
        WHERE trip_id = ${tripId} 
        AND stop_id = ${id["stop_id"]};    
    `);
    const result = stmt3.get();
    if(result){
        console.log(id["stop_id"]);
        return;
    }
});