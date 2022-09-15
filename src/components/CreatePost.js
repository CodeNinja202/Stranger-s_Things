import React, { useState } from "react";
import { createPost } from "../api";
import { Paper, TextField, Button, Link } from "@mui/material";
import logoIMG from "./images/creatPostPIC.png";

const Createpost = ({ token, fetchPosts, navigate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver,
  };
  async function addPost() {
    const results = await createPost(token, newPost);
    fetchPosts();
    navigate(`/posts`);
  }
  return (
    <Paper elevation={5}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addPost();
        }}
      >
        <div className="loginTemplate">
          <img src={logoIMG} style={{ width: "100%" }} />
          <h1>Create A New Post</h1>
          <TextField
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            type="text"
            placeholder="Description*"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            type="text"
            placeholder="Price*"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            type="text"
            placeholder="Location*"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

          <Link
            style={{ textDecoration: "none" }}
            onClick={(event) => {
              event.preventDefault();
              addPost();
            }}
          >
        
            <Button
              style={{
                marginBottom: "2%",
                marginTop: "2%",
                width: "100%",
                borderRadius: 35,
                background: "black",
                opacity: "70%",
                color: "orange",
                borderColor: "black",
              }}
              variant="outlined"
              href="#outlined-buttons"
            >
              Submit Post
            </Button>
          </Link>
        </div>

        <label>Will Deliver</label>
            <input
              type="checkbox"
              placeholder="Will Deliver*"
              checked={willDeliver}
              onChange={(event) => setWillDeliver(!willDeliver)}
            />
      </form>
    </Paper>
  );
};
export default Createpost;
