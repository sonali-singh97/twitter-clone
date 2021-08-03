import React, {useState, useEffect} from 'react';
import { Avatar, Button } from "@material-ui/core";
import Post from "./Post";
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   let login= localStorage.getItem("userId")

   useEffect(() => {

    
    const fetchTweets = async() => {
      try {
        const  headers = {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("userId")}`,
        }
        const res = await axios.get("https://twitter-web-apps.herokuapp.com/post/profile", { headers : headers});
        setName(res.data.posts[0].postedBy.fullName)
        setEmail(res.data.posts[0].postedBy.email)
        console.log(res.data.posts)
        setPosts(res.data.posts)
      }
      catch (err){
        console.log(err)
      }
    }
    fetchTweets()
   
   }, [])

    return (
        <div className="feed">
        <div className="feed__header">
          <h2>Profile</h2>
        </div>

        {login ? <>
          <div className="profile" style={{padding: "15px 20px", display: "flex", alignItems: "center"}}>
        <Avatar style={{ marginRight: "20px", width: "100px !important"}} src="https://res.cloudinary.com/talk-amigo/image/upload/v1610989192/dc5dp7q6wupbfu97wkv8.png" />

        <div>
           <h3> {name && name} </h3> 
           <h3> {email && email} </h3> 
        </div>
        </div>

        <h2 style={{fontSize: "20px", fontWEight: 800 , borderTop: "1px solid #e6ecf0", padding: "15px 20px", color: "#50b7f5"}}>All Posts</h2>
       { posts ? posts.map((post) => {
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
       }) :
       <center>You haven't posted any post yet</center>
  }

         </> : <div style={{ marginTop: "50px"}}> <center> You have to login first</center> </div>}
        
        
      </div>
    )
}

export default Feed;
