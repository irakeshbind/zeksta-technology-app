const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
router.post("/sginup", (req, res) => {
  try { 
    // create a new user
    const newUser = new User({
      id: { type: Schema.Types.ObjectId },
      name: req.body.name,
      email: req.body.name,
      phone: req.body.name,
      address: req.body.name,
      password: req.body.name,
    });
    const userData = new save();
    res.status(200).json({
      data: userData,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", (req, res) => {
  res.status(200).json({
    message: "loging success",
  });
});

module.exports = router;
