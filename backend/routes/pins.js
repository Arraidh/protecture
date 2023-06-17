const router = require("express").Router();
const mongoose = require("mongoose");
const Pin = require("../models/Pin");
const User = require("../models/User");

// Create a new pin
router.post("/", async (req, res) => {
  try {
    const { user, ...pinData } = req.body;
    const existingUser = await User.findById(user);
    if (!existingUser) {
      res.status(400).json({ message: "User not found." });
      return;
    }
    const newPin = new Pin({ user, ...pinData });
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
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

// Get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get pin details with specific ID
router.get("/:id", async (req, res) => {
  try {
    const pin = await Pin.findById(req.params.id);
    if (!pin) {
      res.status(404).json({ message: "Pin not found." });
    } else {
      res.status(200).json(pin);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get pins from a user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const pins = await Pin.find({ user: req.params.userId });
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a pin
router.put("/:id", async (req, res) => {
  try {
    const pin = await Pin.findById(req.params.id);
    if (!pin) {
      res.status(404).json({ message: "Pin not found." });
    } else {
      pin.set(req.body);
      const updatedPin = await pin.save();
      res.status(200).json(updatedPin);
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

// Delete a pin
router.delete("/:id", async (req, res) => {
  try {
    const pin = await Pin.findByIdAndDelete(req.params.id);
    if (pin) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
