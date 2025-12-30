const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
    readonly: true,
});

// Parameters
let day = "sunday";
let trip = "89271636491";

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

// Return
console.log(stmt3.get()[day]==1);