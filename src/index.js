import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { Container, } from "@mui/material";
import "./style.css";
import {
  Navbar,
  Posts,
  Profile,
  Home,
  Register,
  Login,
  CreatePost,
  SinglePostView,
  EditPost,
} from "./components";
import { getPosts, getUserDetails } from "./api";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }

  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }
  async function fetchPosts() {
    const results = await getPosts(token);
    setPosts(results.data.posts);
  }

  async function getMe() {
    const storedToken = window.localStorage.getItem("token");
    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }
    const results = await getUserDetails(token);
    if (results.success) {
      setUser(results.data);
    } else {
      console.log(results.error.message);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, [token]);
  useEffect(() => {
    getMe();
  }, [token]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <nav>
          <Navbar logout={logout} token={token} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/posts"
              element={<Posts posts={posts} token={token} />}
            />
            <Route
              path="/posts/:postID"
              element={
                <SinglePostView
                  posts={posts}
                  token={token}
                  navigate={navigate}
                />
              }
            />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route
              exact
              path="/posts/edit-post/:postID"
              element={
                <EditPost
                  posts={posts}
                  token={token}
                  fetchPosts={fetchPosts}
                  navigate={navigate}
                />
              }
            />
            <Route
              path="/posts/create-post"
              element={
                <CreatePost
                  token={token}
                  fetchPosts={fetchPosts}
                  navigate={navigate}
                />
              }
            />
            <Route
              path="/login"
              element={<Login setToken={setToken} navigate={navigate} />}
            />
            <Route
              path="/register"
              element={
                <Register
                  setToken={setToken}
                  token={token}
                  navigate={navigate}
                />
              }
            />
          </Routes>
        </nav>
      </Container>
    </React.Fragment>
  );
};
const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
