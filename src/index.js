const dotenv = require("dotenv");
const connectDB = require("./db/index.js");
const app = require('./app.js');

dotenv.config();


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 4005;
        app.listen(PORT, () => {
            console.log(`server is running at port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Mongodb connection failed !!", err);
    });
// const dotenv = require("dotenv");
// const connectDB = require("./db/index.js");
// const app = require('./app.js');



// dotenv.config();

// // Connect to the database
// connectDB()
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((err) => {
//         console.error("MongoDB connection failed !!", err);
//     });

// Export the app for Vercel
module.exports = app;
