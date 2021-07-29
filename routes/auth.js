const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middlewares/authMiddleware')
const { loginUser, logoutUser} = require("../controller/user")

router.route("/user/login").all(ensureGuest).post(loginUser)

router.route("/user/logout").all(ensureAuth).get(logoutUser)

module.exports = router