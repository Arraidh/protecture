const router = require("express").Router();
const Pin = require("../models/Pin");

// membuat pin baru

router.post("/", async (req, res)=>{
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

// mengambil semua pin

router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router