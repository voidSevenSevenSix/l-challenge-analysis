const Database = require("better-sqlite3");

const db = new Database("../google_transit/database.db", {
  readonly:  true, 
});

const stmt = db.prepare(`
    SELECT * 
    FROM StopsRef
`);

let map = {

};

const rows = stmt.all();
rows.forEach(row => {
    let stopName = row["STOP_NAME"];
    let id = row["STOP_ID"];
    stopName = "_" + stopName;
    if(row["RED"] == "true"){
        stopName = "R" + stopName;
    }
    if(row["BLUE"] == "true"){
        stopName = "B" + stopName;
    }
    if(row["G"] == "true"){
        stopName = "G" + stopName;
    }
    if(row["BRN"] == "true"){
        stopName = "B" + stopName;
    }
    if(row["P"] == "true"){
        stopName = "P" + stopName;
    }
    if(row["Y"] == "true"){
        stopName = "Y" + stopName;
    }
    if(row["Pnk"] == "true"){
        stopName = "Pnk" + stopName;
    }
    if(row["O"] == "true"){
        stopName = "O" + stopName;
    }
    stopName = stopName.replaceAll("(", "");
    stopName = stopName.replaceAll(")", "");
    stopName = stopName.replaceAll(" ", "_");
    stopName = stopName.replaceAll("'", "");
    stopName = stopName.replaceAll("-", "_");
    stopName = stopName.replaceAll("/", "_");
    stopName = stopName.replaceAll(".", "");
    console.log("let " + stopName + " = " + id + ";");
});