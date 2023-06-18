const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pin",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    donationGoal: {
      type: Number,
      required: true,
    },
    currentDonation: {
      type: Number,
      default: 0,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    donors: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        paymentMethod: {
          type: String,
        },
        paymentStatus: {
          type: String,
        },
        paymentToken: {
          type: String,
        },
        paymentRedirectURL: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", DonationSchema);
