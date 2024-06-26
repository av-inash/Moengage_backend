const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(

    {
        name: {
            type: String,

            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            required: true
        },










    }, { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next()


})


const User = mongoose.model("User", userSchema)

module.exports = User;