import React, {useState, useEffect} from 'react';
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const createPost = async() => {
      const body = {
        caption: tweetMessage,
        photo : tweetImage
      }
     const  headers = {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("userId"),
      }

      try{
      const res = axios.post("http://localhost:5000/post/create", body , {
        headers : headers
      })
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
      
    }

    return (
        <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://image.pngaaa.com/408/81408-middle.png" />
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
  
          <Button
            type="submit"
            onClick = {createPost}
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        </form>
      </div>
    )
}

export default TweetBox
