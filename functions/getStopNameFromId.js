const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

const stopId = 1;

const stmt = db.prepare(`
    SELECT stop_name FROM Stops WHERE stop_id = ${stopId};
`);

const row = stmt.get();
console.log(row["stop_name"]);