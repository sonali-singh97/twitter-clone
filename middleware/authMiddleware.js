const asyncHandler = require("express-async-handler");

 const ensureAuth = asyncHandler(async (req, res, next) => {

  console.log(req.headers)
  const  {authorization} =  req.headers;

    try {
      req.user = await UserfindById(authorization);
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