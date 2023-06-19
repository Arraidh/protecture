const router = require("express").Router();
const OpenVolunteer = require("../models/Volunteer");
const { ObjectId } = require("mongodb");

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

// Add a volunteer to an Open Volunteer
router.put("/:id/volunteer", async (req, res) => {
  try {
    const { user, name, email, phoneNumber } = req.body;
    const checkUser = new ObjectId(user);

    // Find the Open Volunteer by ID
    const openVolunteer = await OpenVolunteer.findById(req.params.id);

    if (!openVolunteer) {
      return res.status(404).json({ message: "Open Volunteer not found." });
    }

    // Check if the user is already a volunteer
    const existingVolunteer = openVolunteer.volunteers.find((volunteer) => {
      volunteer.user == checkUser;
    });

    if (existingVolunteer) {
      return res.status(400).json({ message: "User is already a volunteer." });
    }

    // Create a new Volunteer object
    const volunteerData = {
      user,
      name,
      email,
      phoneNumber,
    };

    // Push the new volunteer to the Open Volunteer's volunteers array
    openVolunteer.volunteers.push(volunteerData);

    // Save the updated Open Volunteer
    const updatedVolunteer = await openVolunteer.save();

    res.status(200).json(updatedVolunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search Open Volunteers by User ID
router.get("/registered-by/:userId", async (req, res) => {
  try {
    const volunteers = await OpenVolunteer.find({
      "volunteers.user": req.params.userId,
    });
    res.status(200).json(volunteers);
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
