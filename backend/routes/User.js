const express = require("express");
const router = express.Router();
router.post("/sginup", (req, res) => {
  res.status(200).json({
    message: "signup succes",
  });
});

router.post("/login", (req, res) => {
  res.status(200).json({
    message: "loging success",
  });
});

module.exports = router;
