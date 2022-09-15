import React from "react";
import Paper from "@mui/material/Paper";
const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;

  console.log(user);

  return (
    <div className="main_div">
      <div className="message-div">
        <h1
          style={{
            textAlign: "center",
            color: "orange",
            opacity: "70%",
            backgroundColor: "black",
            borderRadius: 32,
          }}
        >
          Received Messages:
        </h1>

        {messages &&
          messages.map((message) => {
            const fromUserID = message.fromUser._id;
            const { username } = message.fromUser;
            const { title } = message.post;

            if (userID !== fromUserID) {
              return (
                <Paper
                  style={{
                    opacity: "65%",
                    backgroundColor: "orange",
                    padding: "20px",
                    margin: "20px",
                  }}
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
        <h1
          style={{
            textAlign: "center",
            color: "orange",
            opacity: "70%",
            backgroundColor: "black",
            borderRadius: 32,
          }}
        >
          Sent Messages:
        </h1>
        {messages &&
          messages.map((message) => {
            const fromUserID = message.fromUser._id;

            if (userID === fromUserID) {
              return (
                <Paper
                  style={{
                    color: "white",
                    opacity: "50%",
                    backgroundColor: "black",
                    padding: "20px",
                    margin: "20px",
                  }}
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
