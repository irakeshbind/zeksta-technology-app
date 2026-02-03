
const jwt = require("jsonwebtoken");

const checkoutAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Token not provided",
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("TOKEN: ", token);
    console.log("ENV: ", process.env.JWT_SECRET);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "sbs online 123",
    );

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = checkoutAuth;
