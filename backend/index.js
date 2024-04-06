const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());
 
//create database connection
// const mysql = require('mysql');
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'uigo'
// });

// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });

app.listen(5000, () => {
  console.log("Server running successfully on 5000");
});