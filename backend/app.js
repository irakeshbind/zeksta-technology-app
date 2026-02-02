const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser= require('body-parser');

// import it is file routes
const userRouter = require("./routes/user.js");
const addEmployeeRouter= require('./routes/addEmployees.js')
const mongoose = require("mongoose");
const connectWithDatabase = async () => {
  try {
    // console.log(process.env.TOKEN_KEY)
    await mongoose.connect(process.env.mongo_URL);
    console.log("connected with databases");
  } catch (err) {
    console.log("databse is not connect");
  }
};
connectWithDatabase();
app.use(bodyParser.json());
// it is use this router
app.use("/api", userRouter);
app.use('/addEmp',addEmployeeRouter);

module.exports = app;
