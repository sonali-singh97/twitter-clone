
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

// @desc Register User
// @route POST /auth/login
// @Access Public
const loginUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {
        fullName,
        email,
        userId
    } = req.body;

    const user = await User.findOne({
        email
    });

    if (user) {
        res.status(200).json({
            msg: "User already exists in database"
        })
    } else {
  
        const newUser = new User({
            fullName,
            email,
            userId
        });

        console.log(newUser)
        try {
            const result = await newUser.save();
            res.status(200).json({ msg: "registeration successful ", user: result})
        } catch (err) {
            res.status(500).send(err)
        }
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    console.log("request")

});

module.exports={
    loginUser, 
    logoutUser
}
