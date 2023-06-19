const router = require("express").Router();
const mongoose = require("mongoose");
const Donation = require("../models/Donation");
const User = require("../models/User");
const Pin = require("../models/Pin");
const midtransClient = require("midtrans-client");
const UserDonation = require("../models/UserDonation");

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
    const { ...donationData } = req.body;

    const existingUser = await User.findById(donationData.user);
    const existingDonation = await Donation.findById(donationData.Donation);

    if (!existingUser || !existingDonation) {
      res.status(400).json({ message: "User or Open Donation not found." });
      return;
    }
    if (!donationData) {
      res.status(404).json({ message: "Donation not found." });
      return;
    }
    let transactionToken;

    // Check if the payment was successful (assuming paymentStatus is provided by the payment gateway API)
    if (donationData) {
      donationData.donationTitle = existingDonation.title;
      const newDonation = new UserDonation({
        ...donationData,
        token: transactionToken,
      });

      // Create Snap API instance
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.SERVER_KEY,
      });

      let parameter = {
        transaction_details: {
          order_id: newDonation._id,
          gross_amount: newDonation.amount,
        },
      };

      await snap.createTransaction(parameter).then((transaction) => {
        // transaction token
        transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);
        newDonation.token = transactionToken;
      });

      const savedDonation = await newDonation.save();

      res.status(200).json(savedDonation);
    } else {
      res.status(400).json({ message: "Payment was not successful." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user donation details by ID
router.get("/userDonations/:id", async (req, res) => {
  try {
    const userDonation = await UserDonation.findById(req.params.id);
    if (!userDonation) {
      res.status(404).json({ message: "User Donation not found." });
    } else {
      res.status(200).json(userDonation);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user donation details by user ID
router.get("/userDonations/user/:userId", async (req, res) => {
  try {
    const userDonations = await UserDonation.find({ user: req.params.userId });
    res.status(200).json(userDonations);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all user donations
router.get("/userDonations", async (req, res) => {
  try {
    const userDonations = await UserDonation.find();
    res.status(200).json(userDonations);
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

// Delete all UserDonations
router.delete("/userDonations", async (req, res) => {
  try {
    await UserDonation.deleteMany({});
    res.status(200).json({ message: "All UserDonations deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
