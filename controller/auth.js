

// @desc Register User
// @route POST /auth/user/signup
// @Access Public
const registerUser = asyncHandler(async (req, res) => {
    console.log("request")
    // const {
    //     fullName,
    //     email,
    //     password,
    // } = req.body;

    // const user = await User.findOne({
    //     email
    // });

    // if (user) {
    //     res.status(422).json({
    //         msg: "User already exists in database"
    //     })
    // } else {
    //     const hashedPassword = await bcrypt.hash(password, 12)
   
    //     const newUser = new User({
    //         fullName,
    //         email,
    //         password : hashedPassword,
    //     });

    //     try {
    //         const result = await newUser.save();
    //         res.status(200).redirect('/login')
    //     } catch (err) {
    //         res.status(500).send(err)
    //     }
    // }
});
