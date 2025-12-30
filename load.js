const Database = require("better-sqlite3");

const db = new Database("google_transit/database.db", {
  readonly:  true, 
});

const stmt = db.prepare(`
  SELECT trip_id
  FROM Times
  WHERE stop_id = 30204
  ORDER BY arrival_time
  LIMIT 10
`);

const rows = stmt.all();

rows.forEach(trip => {
    let tripId = trip["trip_id"];
    const stmt2 = db.prepare(`
        SELECT service_id
        FROM Trips
        WHERE trip_id = ${tripId}
    `);
    const serviceId = stmt2.get()["service_id"];
    const stmt3 = db.prepare(`
        SELECT * 
        FROM Calendar
        WHERE service_id = ${serviceId}
    `);
    console.log(stmt3.all());
});