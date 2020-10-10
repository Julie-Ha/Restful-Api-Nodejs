const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv/config");

//Middlewares
app.use(bodyParser.json());

//Import Routes
const menusRoute = require('./routes/menus');

app.use('/menus', menusRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected")
);

app.listen(3000);
