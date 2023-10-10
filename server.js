//initialize app
const express = require("express");
const app = express();
const port = 3001;

const mongoose = require("mongoose"); //require mongoose db; allows for object document mapping
const methodOverride = require("method-override"); //method-override package: for spoofing HTTP methods
require("dotenv").config(); //require .env file; allows for process.env.some_const_inside_env_goes_here syntax to be used

//require controllers
const questionsController = require("./controllers/questionsController");
const answersController = require("./controllers/answersController");

//add views templating engine here if views are used

//middleware
//body parser middleware included in express; allows for req.body syntax to be used
app.use(express.urlencoded({ extended: true }));

//use methodOverride package for adding a query parameter to the delete form named _method
//allows for delte method to be spoofed
app.use(methodOverride("_method"));

//db connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//routes
//homepage route
app.get("/", (req, res) => {
  res.send("Welcome to MERN Stack Questions App");
});

//resource routes
app.use("/questions", questionsController); // tells server.js to import the routes from file that questionsController gets set to
app.use("/answers", answersController);

//listen on port; default is 3001
app.listen(port, () => {
  console.log("listening on port: " + port);
});
