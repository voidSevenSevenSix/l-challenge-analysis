const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

let line = "Y";
let stopNameContains = "Howard";

const stmt = db.prepare(`
    SELECT STOP_ID 
    FROM StopsRef 
    WHERE STOP_NAME LIKE '%${stopNameContains}%' AND ${line} = 'true';
`);

const row = stmt.get();

console.log(row["STOP_ID"]);