const express = require('express')
const cors = require('cors');
const create_db = require('./DB/DBConfig');


const app = express()
const port = 3000

// Middlewares
app.use(express.json());
app.use(cors());

create_db()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))