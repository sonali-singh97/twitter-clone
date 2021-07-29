const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const connectdb = require("./config/db");
const path = require("path")
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

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    //console.log(path.join(__dirname, "/client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => res.send("API is running..."));
  }

app.listen(PORT, console.log( `Server is running  on Port ${PORT}`));