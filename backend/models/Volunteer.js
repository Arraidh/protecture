const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const OpenVolunteerSchema = new mongoose.Schema(
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
    volunteeringDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    whatsappGroup: {
      type: String,
      required: true,
    },
    organizerContact: {
      type: String,
      required: true,
    },
    volunteers: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
      },
    ],
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Populate city and country from referenced Pin model
OpenVolunteerSchema.pre("save", async function (next) {
  try {
    const pin = await mongoose.model("Pin").findById(this.pin);
    if (pin) {
      this.city = pin.city;
      this.country = pin.country;
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("OpenVolunteer", OpenVolunteerSchema);
