
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {
        fullName,
        email,
        password
    } = req.body;

    const user = await User.findOne({
        email
    });

    if (user) {
        res.status(400).json({
            msg: "User already exists in database"
        })
    } else {
  
        const newUser = new User({
            fullName,
            email,
            password
        });

        console.log(newUser)
        try {
            const result = await newUser.save();
            res.status(200).json({ msg: "registeration successful ", user: result})
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
});

const loginUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {
        email,
        password
    } = req.body;

    try {

    const user = await User.findOne({
        email, password
    });

    console.log(user)

    if (user) {
        const id = user._id;
        const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
        console.log(token)
        res.status(200).json({
        ...user, 
        token
        })
    }
 } 

 catch(err){
     res.status(400).json(err);
 }
});



module.exports={
    registerUser,
    loginUser, 
}
