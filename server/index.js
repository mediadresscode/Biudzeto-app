const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"password",
    database: "projekto_db",
});

app.get('/', (req, res) => {
    
    const sqlInsert ="INSERT INTO asmenys (vardas, el_pastas, slaptazodis) VALUES ('Petras','petras@mail.com','petras');"
    db.query(sqlInsert,(err, result)=>{
        res.send("hello petras");
    })

})

app.listen(3001, ()=>{
    console.log("running on port 3001");
});