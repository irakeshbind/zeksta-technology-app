const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
router.post("/sginup", (req, res) => {
  
});

router.post("/login", (req, res) => {
  res.status(200).json({
    message: "loging success",
  });
});

module.exports = router;
