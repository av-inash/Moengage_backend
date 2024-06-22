const Review = require('../models/review.model');
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require('../utils/ApiErrors');


const addReview = asyncHandler(async (req, res) => {
    const { breweryId, rating, description } = req.body;
    try {
        const newReview = new Review({
            user: req.user.id,
            brewery: breweryId,
            rating,
            description,
        });
        const review = await newReview.save();
        return res.status(200).json(new ApiResponse(200, review, "Review added successfully"))
    } catch (error) {
        console.error(err.message);
        return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
    }
});

const getReview = asyncHandler(async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200), json(new ApiResponse(200, reviews, "get review succesfully"))
    } catch (error) {
        console.log("error", error)
        throw new ApiError(400, "something went wrong")

    }
})
module.exports = { addReview, getReview }
