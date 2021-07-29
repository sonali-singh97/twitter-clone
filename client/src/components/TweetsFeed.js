import React from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
  
        <TweetBox />

        <Post 
        displayName= "Sonali Singh" 
        username = "sonali" 
        text="New Post" 
        image = "https://www.sierraclub.org/sites/www.sierraclub.org/files/styles/sierra_full_page_width/public/slideshows/slide7_11.jpg?itok=UdNlkVF8"
        avatar="https://image.pngaaa.com/408/81408-middle.png" />
  

         <Post 
        displayName= "Sonali Singh" 
        username = "sonali" 
        text="New Post" 
        image = "https://www.sierraclub.org/sites/www.sierraclub.org/files/styles/sierra_full_page_width/public/slideshows/slide7_11.jpg?itok=UdNlkVF8"
        avatar="https://image.pngaaa.com/408/81408-middle.png" />

    <Post 
        displayName= "Sonali Singh" 
        username = "sonali" 
        text="New Post" 
        image = "https://www.sierraclub.org/sites/www.sierraclub.org/files/styles/sierra_full_page_width/public/slideshows/slide7_11.jpg?itok=UdNlkVF8"
        avatar="https://image.pngaaa.com/408/81408-middle.png" />   
      </div>
    )
}

export default Feed;
