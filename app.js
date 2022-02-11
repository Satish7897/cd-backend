const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://satish7897:Rajukitapri@cluster0.f85je.mongodb.net/rest-api-db?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
const db = mongoose.connection;
const req = require("./Routes/req");
app.use("/req", req);
app.get("/", (req, res) => {
  res.send("hello");

  res.end();
});

app.listen(4000);
console.log("This is my first API  world");
