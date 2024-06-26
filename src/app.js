const express = require("express");
const cors = require("cors");

const userRoutes = require('./routes/user.routes.js');
const breweryRoutes = require('./routes/brewery.routes.js');
const reviewroutes = require("./routes/review.routes.js")

const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: "*"
}));
app.get("/", (req, res) => {
    res.json({ message: "Hello from Moengage backend11111111222222222222222!" });
});

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// User routes
app.use("/api/v1/users", userRoutes);

// Brewery routes
app.use("/api/v1/breweries", breweryRoutes);
app.use("/api/v1/review", reviewroutes)

module.exports = app;
