import React, { useState } from "react";
import { loginUser } from "../api";
import { Button, TextField } from "@mui/material";
import logoIMG from "./images/login_signUP.png";
import { Link } from "react-router-dom";
import "./Register";
const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    console.log(results);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate("/profile");
    } else {
      console.log(results.error.message);
    }
  };
  return (
    <form
      className="loginTemplate"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="loginTemplate">
        <img src={logoIMG} />
        <h1>Log In</h1>
        <TextField
          style={{ margin: ".25rem" }}
          label="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          style={{ margin: ".25rem" }}
          label="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          style={{
            borderRadius: 35,
            background: "black",
            opacity: "70%",
            color: "orange",
            borderColor: "black",
            height: "3rem",
            margin: ".25rem",
          }}
          variant="contained"
          type="submit"
        >
          Log In
        </Button>
        <Link style={{ textDecoration: "none" }} to="/register">
          Don't have an account? Sign Up
        </Link>
      </div>
    </form>
  );
};
export default Login;
