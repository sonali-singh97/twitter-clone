const express = require('express')
const router = express.Router()
// const { ensureAuth, ensureGuest } = require('../middlewares/authMiddleware')
const { loginUser, logoutUser} = require("../controller/auth")

router.route("/login").post(loginUser)

router.route("/logout").get(logoutUser)

module.exports = router