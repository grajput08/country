const express = require("express");
const router = express.Router();
const apiResponseMiddleware = require("../middleware/apiResponseMiddleware");
const { getCountry, getCountryById } = require("../controllers/getCountry");
const { createCountry } = require("../controllers/createCountry");
const {
  getNeighouringCountry,
} = require("../controllers/getneighouringCountry");

router.use(apiResponseMiddleware);

//define APi routes
router.get("/country", getCountry);
router.get("/country/:id", getCountryById);
router.post("/create/country", createCountry);
router.get("/country/:cca3/neighbour", getNeighouringCountry);

module.exports = router;
