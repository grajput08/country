const Country = require("../models/countryModels");

exports.createCountry = async (req, res) => {
  const countries = req.body; // Assuming req.body is an array of countries

  // Use the insertMany function to add multiple countries to the database
  const savedCountries = await Country.insertMany(countries);

  res.apiSuccess(savedCountries, "Country created successfully");
};
