const express = require('express')

// const { searchBrewery, getBreweryDetails, addBrewery } = require('../controllers/brewery.controller');

const { addReview, getReview } = require('../controllers/review.controller');

// const verifyJwt = require('../middlewares/auth.middleware');


const router = express.Router()

router.post('/addreview', addReview);

router.post("/get-review", getReview)

module.exports = router;
