const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//daftar

router.post("/register", async (req, res) => {
    try {
        //buat password baru
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //buat user baru
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //simpan user dan kirim response
        const user = await newUser.save();
        res.status(200).json(user._id);

    } catch (err) {
        res.status(500).json(err)
    }
});


//masuk

router.post("/login", async (req, res) => {
    try {
        //find user
        const foundUser = await User.findOne({ username: req.body.username });
        console.log({ foundUser })

        if (foundUser) {
            //if foundUser: compare entered password to stored/foundUser password.
            const validPassword = await bcrypt.compare(
                req.body.password,
                foundUser.password
            );
            if (validPassword) {
                //if both passwords match:
                res.status(200).json({ username: foundUser.username });
            } else {
                //if both passwords dont match:
                res.status(400).json({ err: "Incorrect username or password" });
            }
        } else {
            //if !foundUser:
            res.status(400).json({ err: "Incorrect username or password" });
        }

    } catch (error) {
        res.status(500).json({ error, test: 'test' });
    }
});

module.exports = router