const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

// signup api
router.post("/signup", async (req, res) => {
  try {
    // email validation
    const email = req.body.email;
    const users = await User.findOne({ email });
    if (users) {
      return res.status(400).json({ message: "Email already registered" });
    }
    // 👇 password yahin se lena hai
    const password = req.body.password;

    // hash password (bcrypt)
    const hash = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: hash,
    });

    const UserData = await newUser.save();

    res.status(200).json({
      data: UserData,
    });
  } catch (err) {
    console.log(err);
  }
});

//  login api

module.exports = router;
