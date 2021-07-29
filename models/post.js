const mongoose = require("mongoose"),
  { ObjectId } = mongoose.Schema.Types;
 
const postSchema = new mongoose.Schema(
  {
   
    caption: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
