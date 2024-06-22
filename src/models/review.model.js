const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    brewery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brewery'

    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true

    },

    description: {
        type: String,
        required: true

    },

}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
