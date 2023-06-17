const router = require("express").Router();
const OpenVolunteer = require("../models/Volunteer");

// Get all Open Volunteers
router.get("/", async (req, res) => {
  try {
    const volunteers = await OpenVolunteer.find();
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Open Volunteer details by ID
router.get("/:id", async (req, res) => {
  try {
    const volunteer = await OpenVolunteer.findById(req.params.id);
    if (!volunteer) {
      res.status(404).json({ message: "Volunteer not found." });
    } else {
      res.status(200).json(volunteer);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Open Volunteers by User ID
router.get("/user/:userId", async (req, res) => {
  try {
    const volunteers = await OpenVolunteer.find({ user: req.params.userId });
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Volunteers volunteered by User ID
router.get("/volunteered-by/:userId", async (req, res) => {
  try {
    const volunteers = await OpenVolunteer.find({
      volunteers: req.params.userId,
    });
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new Open Volunteer
router.post("/", async (req, res) => {
  try {
    const newVolunteer = new OpenVolunteer(req.body);
    const savedVolunteer = await newVolunteer.save();
    res.status(200).json(savedVolunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an Open Volunteer
router.put("/:id", async (req, res) => {
  try {
    const volunteer = await OpenVolunteer.findById(req.params.id);
    if (!volunteer) {
      res.status(404).json({ message: "Volunteer not found." });
    } else {
      volunteer.set(req.body);
      const updatedVolunteer = await volunteer.save();
      res.status(200).json(updatedVolunteer);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an Open Volunteer
router.delete("/:id", async (req, res) => {
  try {
    const volunteer = await OpenVolunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      res.status(404).json({ message: "Volunteer not found." });
    } else {
      res.status(200).json({ message: "Volunteer deleted successfully." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
