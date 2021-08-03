import React, {useState} from 'react';
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const login = localStorage.getItem("userId")

    const createPost = async() => {
      const body = {
        caption: tweetMessage,
        photo : tweetImage
      }
     const  headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("userId")}`,
      }

      try{
      const res = axios.post("https://twitter-web-apps.herokuapp.com/post/create", body , {
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

          { login ?          <form>
          <div className="tweetBox__input">
            <Avatar src="https://res.cloudinary.com/talk-amigo/image/upload/v1610989192/dc5dp7q6wupbfu97wkv8.png" />
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
        </form> :
        
       <center> <h3 style={{color: "tomato"}}> You have to login first to enable Tweet option</h3> </center>
        }

     
     </div>
    )
}

export default TweetBox
