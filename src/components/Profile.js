import React from "react";
import Paper from "@mui/material/Paper";
const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;

  console.log(user);

  return (
    <div className="main_div">
      <div className="message-div">
        <Paper elevation={5}>
          <h1>Received Messages:</h1>
        </Paper>
        {messages &&
          messages.map((message) => {
            const fromUserID = message.fromUser._id;
            const { username } = message.fromUser;
            const { title } = message.post;

            if (userID !== fromUserID) {
              return (
                <Paper
                  style={{ padding: "20px", margin: "20px" }}
                  elevation={5}
                >
                  <div key={message._id}>
                    <p>From User: {username} </p>
                    <p>Message: {message.content}</p>
                    <p>Post Reference: {title}</p>
                  </div>
                </Paper>
              );
            }
          })}
      </div>
      <div>
        <Paper elevation={5}>
          <h1>Sent Messages:</h1>
        </Paper>
        {messages &&
          messages.map((message) => {
            const fromUserID = message.fromUser._id;

            if (userID === fromUserID) {
              return (
                <Paper
                  style={{ padding: "20px", margin: "20px" }}
                  elevation={5}
                >
                  <div key={message._id}>{message.content}</div>
                </Paper>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Profile;