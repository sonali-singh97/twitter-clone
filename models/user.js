const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/talk-amigo/image/upload/v1610989192/dc5dp7q6wupbfu97wkv8.png"
    },
    followers: [{ type: ObjectId, ref: 'User' }],
    following: [{ type: ObjectId, ref: 'User' }],

})

module.exports = mongoose.model("User", userSchema);