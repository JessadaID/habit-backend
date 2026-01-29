const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("habit.db",(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Database connected");
    }
});

module.exports = db;