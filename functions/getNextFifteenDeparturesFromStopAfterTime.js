const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

// Parameters
let stop = 6691;
let time = "16:00:00";

const stmt = db.prepare(`
    SELECT trip_id 
    FROM Times 
    WHERE departure_time >= '${time}'
    AND stop_id = ${stop}
    ORDER BY departure_time
    LIMIT 15;
`);

const rows = stmt.all();

// Return
rows.forEach(row => {
  console.log(row["trip_id"]);
})