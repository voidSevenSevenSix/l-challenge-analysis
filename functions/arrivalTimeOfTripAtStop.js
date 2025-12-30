const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

// Parameters
let trip = 89271636491;
let stop = 30182;

const stmt = db.prepare(`
    SELECT arrival_time 
    FROM Times 
    WHERE trip_id = ${trip} 
    AND stop_id = ${stop}
`);

const time = stmt.get();

// Return
console.log(time["arrival_time"]);