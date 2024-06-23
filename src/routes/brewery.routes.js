const express = require('express')

const { searchBrewery, getBreweryDetails, getAllBreweries } = require('../controllers/brewery.controller');



const { verifyJwt } = require('../middlewares/auth.middleware');


const router = express.Router()
router.get('/search', verifyJwt, searchBrewery)
router.get('/find-by-id', verifyJwt, getBreweryDetails);
router.get("/all", getAllBreweries)


module.exports = router;
