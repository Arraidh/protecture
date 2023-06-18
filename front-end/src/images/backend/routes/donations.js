const router = require("express").Router();
const mongoose = require("mongoose");
const Donation = require("../models/Donation");
const User = require("../models/User");
const Pin = require("../models/Pin");

// Get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get donation details by ID
router.get("/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found." });
    } else {
      res.status(200).json(donation);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get donations made by a specific user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.params.userId });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get donations where a user has donated
router.get("/donor/:userId", async (req, res) => {
  try {
    const donations = await Donation.find({ "donors.user": req.params.userId });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new donation
router.post("/", async (req, res) => {
  try {
    const { user, pin, ...donationData } = req.body;
    const existingUser = await User.findById(user);
    const existingPin = await Pin.findById(pin);
    if (!existingUser || !existingPin) {
      res.status(400).json({ message: "User or Pin not found." });
      return;
    }
    const newDonation = new Donation({ user, pin, ...donationData });
    const savedDonation = await newDonation.save();
    res.status(200).json(savedDonation);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.values(err.errors).map(
        (error) => error.message
      );
      res.status(400).json({ errors: errorMessages });
    } else {
      res.status(500).json(err);
    }
  }
});

// Add a user as a donor to a donation
router.post("/:id/donate", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found." });
      return;
    }

    const {
      user,
      paymentMethod,
      paymentStatus,
      paymentToken,
      paymentRedirectURL,
    } = req.body;

    // Check if the payment was successful (assuming paymentStatus is provided by the payment gateway API)
    if (paymentStatus === "Paid") {
      // Add the user as a donor to the donation
      donation.donors.push({
        user,
        paymentMethod,
        paymentStatus,
        paymentToken,
        paymentRedirectURL,
      });

      // Save the updated donation
      const updatedDonation = await donation.save();

      res.status(200).json(updatedDonation);
    } else {
      res.status(400).json({ message: "Payment was not successful." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a donation
router.put("/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) {
      res.status(404).json({ message: "Donation not found." });
    } else {
      donation.set(req.body);
      const updatedDonation = await donation.save();
      res.status(200).json(updatedDonation);
    }
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.values(err.errors).map(
        (error) => error.message
      );
      res.status(400).json({ errors: errorMessages });
    } else {
      res.status(500).json(err);
    }
  }
});

// Delete a donation
router.delete("/:id", async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);
    if (donation) {
      res.status(200).json({ message: "Donation deleted successfully" });
    } else {
      res.status(404).json({ error: "Donation not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
