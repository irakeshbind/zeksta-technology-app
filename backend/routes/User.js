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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await User.findOne({ email });

    // find user
    if (!users) {
      res.status(404).json({
        message: "invalid password",
      });
    }

    //  compare password
    const isvalid = await bcrypt.compare(password, users.password);
    if (!isvalid) {
      res.status(404).json({
        message: "user not found or invalid credential",
      });
    }

    //  generate token
    const token = jwt.sign(
      {
        name: users.name,
        email: users.email,
        phone: users.phone,
        address: users.address,
        // uId: users.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.status(200).json({
      message: "Login successfully",
      name: users.name,
      email: users.email,
      phone: users.phone,
      address: users.address,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
