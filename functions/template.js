const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

// Parameters


const stmt = db.prepare(`
    
`);

const rows = stmt.all();

// Return
console.log();