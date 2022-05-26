let sqlite3 = require('sqlite3').verbose();
let express = require('express');
let app = express();
let db = new sqlite3.Database('./dbEstoque.db');
let cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Server Listening !");
});