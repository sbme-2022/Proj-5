import sqlite3 from "sqlite3";
sqlite3.verbose();
import cron from 'node-cron';
const Databases = "Data.db";
import fetch from 'node-fetch';
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
async function updateDatabase() {
var data = await getUser()
var KeysArray = Object.keys(Object.values(data)[6])
var ValuesArray = Object.values(Object.values(data)[6])
console.log(data)
var db = new sqlite3.Database(Databases, (err) => {
  if (err) {
    console.error(err.message);
  }
  else {
    console.log("Connected to the Database database in sqlite.");
    for (let i = 0; i < KeysArray.length; i++) {
      console.log(KeysArray[i])
      var sql = `UPDATE Currency SET CurrencyValue= ${ValuesArray[i]} WHERE CurrencyName = '${KeysArray[i]}'`;
      var parameters = [];
      db.run(sql, parameters, function (err) {
        if (err) {
          console.log(err)
          return;
        }
        
      })
      
    }
    var sql = `select * from Currency`
    db.each(sql, (err, rows) => {
      if (err) {
        console.log (err);
        return;
      }
      console.log(rows)
    })
    console.log("Updated the Database database in sqlite.");
  }
});
}
cron.schedule('* */6 * * *', async () => {
  await updateDatabase()
});