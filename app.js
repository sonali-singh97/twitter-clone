const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const connectdb = require("./config/db");
const cors = require('cors')

const app = express();
dotenv.config();
connectdb();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = process.env.PORT || 5000 ;

app.use('/auth', require('./routes/auth'));
app.use('/post', require('./routes/post'));

app.listen(PORT, console.log( `Server is running  on Port ${PORT}`));