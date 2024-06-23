const express = require('express')


const { addReview, getReview } = require('../controllers/review.controller');

const { verifyJwt } = require('../middlewares/auth.middleware');


const router = express.Router()

router.post('/addreview', verifyJwt, addReview);



module.exports = router;
