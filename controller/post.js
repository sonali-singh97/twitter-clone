const Post = require("../models/post");
const asyncHandler = require("express-async-handler");


const getAllPosts = asyncHandler(async (req, res) => {
   try { 

   const posts = await Post.find()
    .populate("postedBy","_id userId fullName image")
    .populate("comments.postedBy", "_id userId fullName image")
    .sort("-createdAt")
    
    res.status(200).json({posts})
    } catch (err) {
        return res.status(422).json(err)
    }
});

// @desc Create Post
// @route POST /post/create
// @Access Private
const createPost = asyncHandler(async (req, res) => {
    const {
        caption,
        photo
    } = req.body;
    if (!caption || !photo) {
        return res.status(422).json({
            error: "please add all the details"
        })
    }

    const post = new Post({
        caption,
        photo,
        postedBy: req.user
    })
    try {
        const result = await post.save();
        res.status(200).json({
            post: result,
            message: " post created successfully"
        })
    } catch (err) {
        res.status(500).send(err)
    }
});

const likePost = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body.postId, {
                $push: {
                    likes: req.userId
                }
            }, {
                new: true
            })
            .populate("postedBy", "_id userId fullName image")
        return res.json(post);

    } catch (err) {
        return res.status(422).json(err)
    }
});

const unlikePost = asyncHandler(async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body.postId, {
                $pull: {
                    likes: req.userId
                }
            }, {
                new: true
            })
            .populate("postedBy", "_id userId fullName image")

        return res.json(post);

    } catch (err) {
        return res.status(422).json(err)
    }

});

const addComment = asyncHandler(async (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.userId
    }

    try {
        const post = await Post.findByIdAndUpdate(req.body.postId, {
                $push: {
                    comments: comment
                }
            }, {
                new: true
            })
            .populate("comments.postedBy", "_id userId fullName image")
            .populate("postedBy", "_id userId fullName image")
        return res.json(post);

    } catch (err) {
        return res.status(422).json(err);
    }
});


module.exports = {
    createPost,
    likePost,
    unlikePost,
    addComment,
    getAllPosts
}