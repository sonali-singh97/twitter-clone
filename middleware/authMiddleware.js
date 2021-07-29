const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/user");

 const ensureAuth = asyncHandler(async (req, res, next) => {

  console.log(req.headers)
  const  {authorization} =  req.headers;

    try {

      const user = await User.findOne({ userId : authorization });
      console.log(user)
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, verification failed");
    }

  if (!authorization) {
    res.status(401);
    throw new Error(" Not authorized");
  }
});


module.exports = ensureAuth ;