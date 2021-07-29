import React, {useState, useEffect} from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState();

   useEffect(async() => {
    try {
      const  headers = {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("userId"),
      }
      const res = await axios.get("http://localhost:5000/post", { headers : headers});
      console.log(res.data.posts)
      setPosts(res.data.posts)
    }
    catch (err){
      console.log(err)
    }
   }, [])

    return (
        <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
  
        <TweetBox />

       { posts && posts.map((post) => {
         return  <Post 
         key = {post._id}
         displayName= {post.postedBy  &&  post.postedBy.fullName}
         username = {post.postedBy && post.postedBy.fullName.toLowerCase().split(" ").join("")}
         text= {post.caption}
         image = {post.photo}
         avatar={post.postedBy && post.postedBy.image}
         likes={post.likes}
         comments={post.comments}
          />
       })
  }

      </div>
    )
}

export default Feed;
