const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

// Parameters
let trip = 6760044215070;
let stop = 3746;

const stmt = db.prepare(`
    SELECT * 
    FROM Times 
    WHERE trip_id = ${trip} 
    AND stop_id = ${stop}
`);

const rows = stmt.all();

// Return
console.log(rows.length!=0);