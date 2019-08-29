const express = require("express"); //to import express
const bodyparser = require("body-parser");
const mongoose = require("mongoose"); //to access and handle mongoDb

const app = express();

const postRoutes = require("../routes/posts");

/*********************  my mongodb atlas connection link***************** */
mongoose
  .connect(
    "mongodb+srv://angblog:vNSBXJJWihXx9Ai6@cluster0-wepoo.mongodb.net/angblog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database ");
  })

  .catch(() => {
    console.log();
  });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

module.exports = app;
app.use("/api/post", postRoutes);
