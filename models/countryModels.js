const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  id: Number,
  name: { type: String, index: true },
  cca3: String,
  currency_code: String,
  currency: String,
  capital: String,
  region: String,
  subregion: String,
  area: Number,
  map_url: String,
  population: { type: Number, index: true },
  flag_url: String,
  neighboring_countries: [String],
});

module.exports = mongoose.model("country", countrySchema);
