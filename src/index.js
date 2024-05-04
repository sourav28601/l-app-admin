const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path=require('path');
const chat=require('./routes/route')
const crypto = require('crypto');
const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log('chata',jwtSecret)
require('dotenv').config();
app.use(cors());
app.use(cookieParser());
app.use("/public", express.static(__dirname + "/public/"));
app.use(express.json());
app.use('/',chat)
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    // res.send('Hello, this is a test route!');
    return res.status(200).json({greet: "Hello Admin"})
});
module.exports = app;