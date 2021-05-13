const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //Get token from header
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(toke, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authorization denied" });
  }
};
