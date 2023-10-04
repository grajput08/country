const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const CountryRoutes = require("./routes/countryRoutes");

app.use(express.json());

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 6010;

//mount the API routes
app.use("/api/v1", CountryRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the database
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE1 </h1>`);
});
