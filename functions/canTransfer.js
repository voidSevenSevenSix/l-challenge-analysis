const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

// Parameters
let from = 30173;
let to = 30175;

const stmt = db.prepare(`
    SELECT *
    FROM Transfers
    WHERE from_stop_id = ${from}
    AND to_stop_id = ${to}
`);

const rows = stmt.get();

// Return
console.log(rows?true:false);