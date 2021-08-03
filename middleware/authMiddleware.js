const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

 const ensureAuth = asyncHandler(async (req, res, next) => {

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodeToken);
      req.user = await User.findById(decodeToken.id);
      console.log(req.user)
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Tokent failed, not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No Token, not authorized");
  }
});


module.exports = ensureAuth ;