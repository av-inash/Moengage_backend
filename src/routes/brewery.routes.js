const express = require('express')

const { searchBrewery, getBreweryDetails, getAllBreweries } = require('../controllers/brewery.controller');



const verifyJwt = require('../middlewares/auth.middleware');


const router = express.Router()
router.get('/search', searchBrewery)
// router.get('/:id', getBreweryDetails);
router.get("/all", getAllBreweries)


module.exports = router;
