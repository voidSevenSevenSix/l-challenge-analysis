const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

const tripId = 6770019377020;

const stmt = db.prepare(`
    SELECT schd_trip_id FROM Trips WHERE trip_id = ${tripId};
`);

const row = stmt.get();
console.log(row["schd_trip_id"]);