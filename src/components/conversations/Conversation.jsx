import React,{ useState, useEffect } from 'react';
import './conversation.css'
import  axios  from 'axios';
import instance from '../../Axios';
export default function Conversation({conversations,currentUser}) {
 const PF =process.env.REACT_APP_PUBLIC_FOLDER;
 const API =process.env.REACT_APP_APIS_SOCIAL;


  const [user,setUser]= useState(null);
  useEffect(()=>{
    const friendId=conversations.members.find((m)=>m !== currentUser._id);
    const getUser=async ()=>{
      try {
        const res=await instance.get("/users?userId="+friendId);
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getUser()
  },[currentUser,conversations])

  return (
    <div className='conversation'>
        <img src={user?.profilePicture? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="conversationImg" />
        <span className="conversationName">{user?.userName}</span>
    </div>
  )
}
