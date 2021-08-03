import React, {useState, useEffect} from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState();

   useEffect(() => {

    const fetchTweets = async() => {
      try {
        const  headers = {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("userId")}`,
        }
        const res = await axios.get("https://twitter-web-apps.herokuapp.com/post", { headers : headers});
        setPosts(res.data.posts)
      }
      catch (err){
        console.log(err)
      }
    }
    fetchTweets()
   
   }, [posts])

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
