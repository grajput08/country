const Country = require("../models/countryModels");

exports.getCountry = async (req, res, next) => {
  const {
    sort_by = "a_to_z",
    page = 1,
    limit = 10,
    name,
    region,
    subregion,
  } = req.query;

  // Define sorting options based on sort_by parameter
  const sortingOptions = {
    a_to_z: { name: 1 },
    z_to_a: { name: -1 },
    population_high_to_low: { population: -1 },
    population_low_to_high: { population: 1 },
    area_high_to_low: { area: -1 },
    area_low_to_high: { area: 1 },
  };

  const skip = (page - 1) * limit;

  // Create a filter object to hold the filtering criteria
  const filter = {};

  if (name) {
    filter.name = { $regex: new RegExp(name, "i") }; // Case-insensitive partial match
  }

  if (region) {
    filter.region = region;
  }

  if (subregion) {
    filter.subregion = subregion;
  }

  const aggregationPipeline = [
    { $match: filter }, // Apply filtering criteria
    { $sort: sortingOptions[sort_by] },
    { $skip: skip },
    { $limit: parseInt(limit) },
  ];

  const countries = await Country.aggregate(aggregationPipeline);

  const totalCountries = await Country.countDocuments(filter); // Count documents matching filter

  const hasNext = page * limit < totalCountries;
  const hasPrev = page > 1;

  res.apiSuccess(
    {
      list: countries,
      has_next: hasNext,
      has_prev: hasPrev,
      page: parseInt(page),
      pages: Math.ceil(totalCountries / limit),
      per_page: parseInt(limit),
      total: totalCountries,
    },
    "Country list"
  );
};

exports.getCountryById = async (req, res, next) => {
  const id = req.params.id;

  const countryDetails = await Country.findById({ _id: id });

  // Data for given id not found
  if (!countryDetails) {
    res.apiNotFound("Country not found");
  }
  // Data for given id FOUND
  res.apiSuccess({ country: countryDetails }, "Country detail");
};
