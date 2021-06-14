const express = require("express");
const usersRoutes = require("./api/routes/users.js");
const morgan = require("morgan");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT;

mongoose.connect(
  "mongodb+srv://amit:amit@ak.htcxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Welcome User");
});

app.listen(port, () =>
  console.log(`App Running on Port: ${process.env.PORT}, ${process.env.secret}`)
);
