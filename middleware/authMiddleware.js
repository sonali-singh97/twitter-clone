const asyncHandler = require("express-async-handler");

 const ensureAuth = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers)
  const userId = localStorage.getItem("userId");
  if (
    jwt_token && jwt_token.startsWith("Bearer")
  ) {
    try {

    //   req.doctor = await Doctor.findById(decodeToken.id);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, verification failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token, Not authorized");
  }
});


module.exports = {
    ensureAuth,
  }