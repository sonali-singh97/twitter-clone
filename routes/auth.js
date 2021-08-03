const express = require('express')
const router = express.Router()
// const { ensureAuth, ensureGuest } = require('../middlewares/authMiddleware')
const { loginUser, registerUser} = require("../controller/auth")

router.route("/login").post(loginUser)

router.route("/register").post(registerUser)

module.exports = router