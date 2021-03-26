"use strict";
const express = require("express");
// const path = require("path");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");

const port = process.env.port || 5000;
// mongoose
//   .connect("mongodb://localhost/gym-databse", {
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then((db) => console.log("DB Connect"))
//   .catch((err) => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Holla");
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`server running on port ${port}`);
});
