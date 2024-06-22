const axios = require('axios');
const Brewery = require('../models/brewery.model');
const Review = require('../models/review.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiErrors');

const searchBrewery = asyncHandler(async (req, res) => {
    const { city, name, brewery_type } = req.query;
    let url = 'https://api.openbrewerydb.org/breweries?';
    if (city) url += `by_city=${city}&`;
    if (name) url += `by_name=${name}&`;
    if (brewery_type) url += `by_type=${brewery_type}&`;

    try {
        const response = await axios.get(url);
        return res.status(200).json(new ApiResponse(200, response.data))

    } catch (error) {
        console.error(error.message);
        throw new ApiError(400, error.message)

    }
});
const getAllBreweries = asyncHandler(async (req, res) => {
    try {
        const response = await axios.get("https://api.openbrewerydb.org/breweries");
        console.log("data", response.data);
        return res.status(200).json(new ApiResponse(200, response.data, "All breweries fetched successfully"));
    } catch (error) {
        console.error("error", error);
        throw new ApiError(400, error.message);
    }
});

const getBreweryDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const brewery = await Brewery.findOne({ id });
        // const reviews = await Review.find({ brewery: brewery._id }).populate('user', 'name');
        return res.status(200).json(new ApiResponse(200, brewery, "brew details get"));
    } catch (err) {
        console.error(err.message);
        throw new ApiError(400, "something error")
    }
});



module.exports = {
    searchBrewery, getBreweryDetails, getAllBreweries
}


