
const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
            min: 5,
        },
        desc: {
            type: String,
            require: true,
            min: 10,
        },
        category: {
            type: String,
            require: true,
        },
        lat: {
            type: Number,
            require: true,
        },
        long: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);