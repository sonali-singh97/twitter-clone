const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middlewares/authMiddleware')

router.route("/create").all(ensureUserAuth).post(post)


module.exports = router