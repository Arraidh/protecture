// models/Pin.js

const mongoose = require("mongoose");
const axios = require("axios");

const PinSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 5,
    },
    desc: {
      type: String,
      required: true,
      min: 10,
    },
    category: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    city: String,
    country: String,
  },
  { timestamps: true }
);

// Middleware to automatically generate city and country
PinSchema.pre("save", async function (next) {
  const { lat, long } = this;
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json`,
      {
        params: {
          access_token: process.env.MAPBOX,
        },
      }
    );
    const features = response.data.features;
    if (features.length > 0) {
      const place = features[0];
      const city = place.context.find((context) =>
        context.id.startsWith("place.")
      );
      const country = place.context.find((context) =>
        context.id.startsWith("country.")
      );
      this.city = city ? city.text : "";
      this.country = country ? country.text : "";
    }
    next();
  } catch (error) {
    console.error("Error retrieving city and country information:", error);
    next(error);
  }
});

module.exports = mongoose.model("Pin", PinSchema);
