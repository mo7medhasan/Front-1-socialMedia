import React,{useState,useEffect, useContext} from "react"
import "./post.css";
import {MoreVert} from '@mui/icons-material'
import axios from "axios"
// import {Users} from "../../dummyData"
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import instance from '../../Axios'
export default function Post({post}) {
 const API =process.env.REACT_APP_APIS_SOCIAL;
  
const [like,setLike]=useState(post.likes.length)
const [isLiked,setIsLiked]=useState(false);
const [user,setUser]=useState({})
const PF=process.env.REACT_APP_PUBLIC_FOLDER;
const {user:currentUser}=useContext(AuthContext);

useEffect(()=>{
  setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id,post.likes])

useEffect(() => {
  const fetchUser= async()=>{
    const res=await instance.get(`/users/${post.userId}`);
    setUser(res.data);
  
  }
  fetchUser();
   }, [post.userId])


const likeHandler =async()=>{
  try {
   await instance.put(`/posts/${post._id}/like`,{userId:currentUser._id})
  } catch (err) {
    
  }
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${ user.userName}`} >
            <img src=  {
             user.profilePicture?  PF+user.profilePicture:PF+"person/noAvatar.png"
              } alt="" className="postProfileImg" /></Link>
            <span className="postUsername">
              {
                user.userName
              }
            </span>
            <span className="postDate">{format(post.createdAt)}</span>

          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
        {post?.desc}

          </span>
          <img src={PF+post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
            <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like}people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
             {post.comment} comments
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
