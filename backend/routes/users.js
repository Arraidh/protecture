const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.city ||
      !req.body.email ||
      !req.body.password
    ) {
      return res
        .status(400)
        .json({ error: "Incomplete user registration data" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      city: req.body.city,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ error: "Username or password is missing" });
    }

    const foundUser = await User.findOne({ username: req.body.username });
    console.log({ foundUser });

    if (foundUser) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );
      if (validPassword) {
        res.status(200).json({ message: "Login successful", user: foundUser });
      } else {
        res.status(400).json({ error: "Incorrect username or password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json({ message: "User updated successfully", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
