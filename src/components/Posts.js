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
          style={{ margin: ".8rem", width:'100%'}}
          label="Search Posts"
          onChange={(event) => setSearchTerm(event.target.value)}
        ></TextField>
      </form>
      {token ? (
        
          <Link style={{ textDecoration: "none" }} to="/posts/create-post">
           <Button
          style={{ 
            marginLeft:"12%",
            borderRadius: 35,
            background:"black",
            opacity:"70%",
            color: "orange",
            borderColor: "black",
            width:"75%", height: "2.5rem"}}
          variant="outlined"
          type="submit"
        >
            Create Post
            </Button>
          </Link>
        
      ) : null}

      {postsToDisplay.map((post) => {
        const { willDeliver, description, location, price, title, _id, isAuthor } = post;
        return (
          <Paper style={{ padding: "20px", margin: "20px" }} elevation={5}>
            <div key={_id}>
              <h3>{title}</h3>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Location: {location}</p>
              <p>Will Deliver:{willDeliver}</p>
              {isAuthor ? (
                <div>
                
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/posts/edit-post/${_id}`}
                    >
  <Button variant="outlined" href="#outlined-buttons">
                      Edit
                      </Button>
                    </Link>
                  
                </div>
              ) : (
                <div>
                
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/posts/${_id}`}
                    >  <Button  style={{
                      marginTop: "5%",
                      borderColor: "black",
                      width: "20%",
                      borderRadius: 35,
                      backgroundColor: "orange",
                      color: "black",
                    }} variant="outlined" href="#outlined-buttons">
                      View
                      </Button>
                    </Link>
                  
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
