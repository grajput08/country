const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE </h1>`);
});
