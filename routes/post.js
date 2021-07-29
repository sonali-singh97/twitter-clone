const express = require('express')
const router = express.Router()
const  ensureAuth  = require('../middleware/authMiddleware');
const { getAllPosts, createPost, likePost, unlikePost , addComment} = require("../controller/post")

router.route("/").all(ensureAuth).get(getAllPosts)
router.route("/create").all(ensureAuth).post(createPost)
router.route("/like").all(ensureAuth).put(likePost)
router.route("/unlike").all(ensureAuth).put(unlikePost)
router.route("/comment/add").all(ensureAuth).put(addComment)

module.exports = router