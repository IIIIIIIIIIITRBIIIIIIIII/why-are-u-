//importing express
const express = require("express");
const cors = require("cors");
//initialisation
const app = express();
//importing database
const connectDB = require("./config/connectDB");

//importing passport
const passport = require("passport");
//importing dotenv
require("dotenv").config();
//connection database
connectDB();
//convert json:middleware
app.use(express.json());
app.use(cors());
//running passport
app.use(passport.initialize());
//ROUTE
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/models"));
app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is running...");
});
