import express from "express";
import cors from "cors";
var app = express();
app.use(express.json());
app.use(cors());
import sqlite3 from "sqlite3";
sqlite3.verbose();
const Databases = "Data.db";
var HTTP_PORT = 3000;
var db = new sqlite3.Database(Databases, (err) => {
  if (err) {
    console.error(err.message);
  }
  else {
    console.log("Connected to the Database database in sqlite.");
  }
});

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
app.get("/", (req, res, next) => {
  res.json({ message: "" });
});


app.post("/convert/", (req, res, next) => {
  var errors = []; // error array
  // console.log(req.body)
  if (!req.body.reeding) {
    errors.push("No reading sent");
  }
  var ConvertingData = {
    FromCurrency: req.body.fromCurrency,
    ToCurrency: req.body.toCurrency,
    Amount: req.body.amount,
  };
  console.log(ConvertingData.FromCurrency);
  var sql = `select * from Currency where CurrencyName = '${ConvertingData.FromCurrency}'`;
  db.get(sql, (err, rows ) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } 
    var From=rows.CurrencyValue;
    console.log(From);
    var sql = `select * from Currency where CurrencyName = '${ConvertingData.ToCurrency}'`;
    db.get(sql, (err, rows ) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      var To =rows.CurrencyValue;
      console.log(To);
      var Amount=ConvertingData.Amount;
      var Result = Amount * (1/From) * To;
      console.log(Result)
      res.json({
        TheResult: Result
      }); })

    // console.log(Result) 
 
  });

});
 

