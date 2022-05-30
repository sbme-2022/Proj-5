import sqlite3 from "sqlite3";
sqlite3.verbose();
const Databases = "Data.db";
import fetch from 'node-fetch';
var db = new sqlite3.Database(Databases, (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log("Connected to the Database database in sqlite.");
    }
}
);
async function getUser() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

var data = await getUser()
var KeysArray = Object.keys(Object.values(data)[6])
console.log(KeysArray)
var ValuesArray = Object.values(Object.values(data)[6])
console.log(data)
console.log(KeysArray.length)


db.run(
    `CREATE TABLE IF NOT EXISTS Currency (
        CurrencyName string,
        CurrencyValue double
        )`,
      console.log('Table Created'), (err) => {
        if (err) {
        } else {
            for (let i = 0; i < KeysArray.length; i++) {
                var sql=`INSERT INTO Currency (CurrencyName, CurrencyValue) VALUES ('${KeysArray[i]}', ${ValuesArray[i]})`;
        db.run(sql, function (err) {
            if (err) {
                console.log(err)
                return;
            }
        var sql = `select * from Currency`;
        db.each(sql, (err, rows) => {
            if (err) { }
                console.log(rows)
            })    
            
    })
}
        }
    }
);
