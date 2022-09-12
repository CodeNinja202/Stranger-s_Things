import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
const Posts = ({ posts, token }) => {
  const [searchTerm, setSearchTerm] = useState("");
  function postMatches(post, string) {
    const { title, description } = post;
    if (
      title.toLowerCase().includes(string.toLowerCase()) ||
      description.toLowerCase().includes(string.toLowerCase())
    ) {
      return post;
    }
  }
  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <div className="main-div">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TextField
          style={{ margin: ".5rem", width: "60rem" }}
          label="Search Posts"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></TextField>
      </form>
      {token ? (
        <Button
          style={{ height: "2.5rem", margin: ".5rem" }}
          variant="outlined"
          type="submit"
        >
          <Link style={{ textDecoration: "none" }} to="/posts/create-post">
            Create Post
          </Link>
        </Button>
      ) : null}

      {postsToDisplay.map((post) => {
        const { description, location, price, title, _id, isAuthor } = post;
        return (
          <Paper style={{ padding: "20px", margin: "20px" }} elevation={5}>
            <div key={_id}>
              <h3>{title}</h3>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Location: {location}</p>
              {isAuthor ? (
                <div>
                  <Button variant="outlined" href="#outlined-buttons">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/posts/edit-post/${_id}`}
                    >
                      Edit
                    </Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button variant="outlined" href="#outlined-buttons">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/posts/${_id}`}
                    >
                      View
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </Paper>
        );
      })}
    </div>
  );
};
export default Posts;
