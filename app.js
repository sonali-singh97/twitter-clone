const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const connectdb = require("./config/db");

const app = express();
dotenv.config();
connectdb();

const PORT = process.env.PORT || 5000 ;

//app.use('/auth', require('./routes/auth'));

app.listen(PORT, console.log( `Server is running  on Port ${PORT}`));