import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import PublishIcon from "@material-ui/icons/Publish";
import { UserContext } from "../App";
import { Button } from "@material-ui/core";

const Post = ({
  id,
  displayName,
  username,
  text,
  image,
  avatar,
  likes,
  comments,
}) => {

  const history = useHistory();

  const { state, setState } = useContext(UserContext);
  const userId = localStorage.getItem("userId");
  const loggedIn = userId !== null ? true : false;

 const [show, setShow] = useState(false)
  const [likeNo, setLike] = useState(likes);
  const [input, setText] = useState("");
  const [commentsArr, setComments] = useState(comments)

  const handleLike = async (id) => {
    console.log(userId);
    if (userId === null) {
      history.push("/login");
    } else {
      const body = {
        postId: id,
      };
      const headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + userId,
      };
      console.log(body, headers);
      const result = await axios.put("http://localhost:5000/post/like", body, {
        headers,
      });
      setLike(result.data.likes);
    }
  };

  const handleUnlike = async (id) => {
    console.log(userId);
    if (userId === null) {
      history.push("/login");
    } else {
      const body = {
        postId: id,
      };
      const headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + userId,
      };
      console.log(body, headers);
      const result = await axios.put(
        "http://localhost:5000/post/unlike",
        body,
        {
          headers,
        }
      );
      setLike(result.data.likes);
    }
  };

  const makeComment = async() => {
    if (userId === null) {
      history.push("/login");
    } else {
      setText("")
      const body = {
        postId: id,
        text: input
      };
      const headers = {
        "Content-Type": "application/json",
        authorization: "Bearer " + userId,
      };
      const result = await axios.put(
        "http://localhost:5000/post/comment/add",
        body,
        {
          headers,
        }
      );
      console.log(result)
     
      setComments(result.data.comments);
      console.log(commentsArr)
    }

  };

  return (
    <div>
      <div className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial"> @{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt="" />}
          <div className="post__footer">
            <div className="post__footer__actions">
              <ChatBubbleOutlineIcon fontSize="small" onClick = { () => setShow(!show)} />
              <span>{comments && commentsArr.length}</span>
            </div>
            <div className={`post__footer__actions`}>
              {(loggedIn && likeNo.includes(state._id) )? (
                <Favorite
                  fontSize="small"
                  style={{ color: "tomato" }}
                  onClick={() => handleUnlike(id)}
                />
              ) : (
                <FavoriteBorderIcon
                  fontSize="small"
                  style={{ color: "tomato" }}
                  onClick={() => handleLike(id)}
                />
              )}
              <span>{likeNo.length}</span>
            </div>
            <PublishIcon fontSize="small" />
          </div>

          <div className="post__comments">
            <input placeholder="Type comment" type="text" value={input}  onChange={(e) => setText(e.target.value)} />
            <Button variant="outlined" className="tweetBox__tweetButton" onClick={makeComment}>
              Comment
            </Button>
          </div>

          {show && (
            <div>
              <h5 stle={{ marginBottom: "5px" }}>Comments</h5>
              {commentsArr.map((ele) => {
                return (
                  <div className="post__commentsBox" key= {ele._id}>
                    <Avatar src={ele.postedBy.image} />
                    <div>
                    <h6 style={{margin:0}}>{ele.postedBy.fullName}</h6>
                    <p style={{marginTop: 4}}>{ele.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
