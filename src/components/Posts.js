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
    <div  className="main-div">
      <div className="postsPg">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
         
          <TextField
            style={{ margin: ".5rem" }}
            label="Search Posts"
            onChange={(event) => setSearchTerm(event.target.value)}
          ></TextField>
        </form>
    
      
        {token ? (
          <div className="searchBar">
            <Button
              style={{ height: "2.5rem", margin: ".5rem" }}
              variant="outlined"
              type="submit"
            >
              <Link to="/posts/create-post">Create Post</Link>
            </Button>
          </div>
          
        ) : null} </div>
        {postsToDisplay.map((post) => {
          const { description, location, price, title, _id, isAuthor } = post;
          return (
            
           
               
            <Paper style={{padding:'20px', margin:'20px'}} elevation={2}>
                 
                <div key={_id}>
                  <h3>{title}</h3>
                  <p>Description: {description}</p>
                  <p>Price: {price}</p>
                  <p>Location: {location}</p>
                  {isAuthor ? (
                    <div>
                      <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                    </div>
                  ) : (
                    <div>
                      
                      <Link to={`/posts/${_id}`}>View</Link>
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
