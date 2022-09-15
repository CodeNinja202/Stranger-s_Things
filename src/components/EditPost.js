import { React, useState } from "react";
import { updatePost, deletePost, getPosts } from "../api";
import { useParams } from "react-router-dom";
import { Paper, TextField, Button, Link } from "@mui/material";
import logoIMG from "./images/editPicj.png"
const EditPost = ({ posts, token, fetchPosts, navigate }) => {
  const { postID } = useParams();

  const [currentPost] = posts.filter((post) => post._id === postID);

  const { title, description, location, price, willDeliver } = currentPost;

  const [newtitle, setNewTitle] = useState(title);
  const [newdescription, setNewDescription] = useState(description);
  const [newprice, setNewPrice] = useState(price);
  const [newlocation, setNewLocation] = useState(location);
  const [newwillDeliver, setNewWillDeliver] = useState(willDeliver);

  async function editPost() {
    const updatedPost = {
      title: newtitle,
      description: newdescription,
      price: newprice,
      location: newlocation,
      willDeliver: newwillDeliver,
    };

    await updatePost(token, updatedPost, postID);
    fetchPosts();
    navigate("/posts");
  }

  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <Paper elevation={5}>
      <form
        class="form"
        onSubmit={(event) => {
          event.preventDefault();
          editPost();

          window.location - "/posts";
        }}
      >
        <div className="loginTemplate">
          <img src={logoIMG} style={{ width: "100%" }} />
          <h1>Edit Post</h1>
          <TextField
            type="text"
            placeholder={title}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <TextField
            id="description"
            type="text"
            placeholder={description}
            onChange={(event) => setNewDescription(event.target.value)}
          />
          <TextField
            type="text"
            placeholder={price}
            onChange={(event) => setNewPrice(event.target.value)}
          />
          <TextField
            type="text"
            placeholder={location}
            onChange={(event) => setNewLocation(event.target.value)}
          />

          <Button
            style={{
              marginTop: "2%",
              width: "100%",
              borderRadius: 35,
              background: "black",
              opacity: "70%",
              color: "orange",
              borderColor: "black",
            }}
            type="submit"
            variant="outlined"
          >
            Edit Post
          </Button>
          <Button
            style={{
              marginBottom: "2%",
              marginTop: "2%",
              width: "100%",
              borderRadius: 35,
              background: "black",
              opacity: "70%",
              color: "red",
              borderColor: "black",
            }}
            type="submit"
            color="error"
            variant="outlined"
            onClick={() => {
              deletePost(token, postID);
            }}
          >
            Delete
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default EditPost;
