import React from 'react';
import Paper from "@mui/material/Paper";
const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;
  
  console.log(user)
  
  return (
    
    <div className="main-div">
      <div className='message-div'>
      
        <h1>Messages from other users!</h1>
        <Paper>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.post;
            
            if (userID !== fromUserID) {
              return (
                <div key={message._id}>
                  <p>From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </div>
              )
            }
          })    
        }</Paper>
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            
            if (userID === fromUserID) {
              return (
                <div key={message._id}>{message.content}</div>
              )
            }
          })    
        }
      </div>
    </div>
    
  )
}

export default Profile;