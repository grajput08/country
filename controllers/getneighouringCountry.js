const Country = require("../models/countryModels");

exports.getNeighouringCountry = async (req, res) => {
  try {
    const { cca3 } = req.params;

    // Find the country by its name
    const country = await Country.findOne({ cca3: cca3 });

    if (!country) {
      res.apiNotFound("Country not found");
    }

    // Get the list of neighboring country names
    const neighboringCountryNames = country.neighboring_countries;

    // Query the database to fetch complete data of neighboring countries
    const neighboringCountries = await Country.find({
      name: { $in: neighboringCountryNames },
    });

    // Filter out neighboring countries with no data
    const neighboringCountriesWithData = neighboringCountries.filter(
      (neighbor) => neighbor
    );

    if (neighboringCountriesWithData.length === 0) {
      res.apiNotFound("No neighboring country data found");
    }

    res.apiSuccess({ country: neighboringCountriesWithData }, "Country detail");
  } catch (err) {
    console.error(err);
    res.apiServerError("Internal Server Error");
  }
};
