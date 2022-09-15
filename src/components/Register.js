import React, { useState } from "react";
import { registerUser } from "../api";
import { Button, TextField, Autocomplete } from "@mui/material";
import logoIMG from "./images/login_signUP.png";

const Register = ({ setToken, navigate }) => {
  // props.setToken
  // const {setToken} = props
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const results = await registerUser(username, password);
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
        <h1>Create Account</h1>

        <TextField
          inputProps={{ minLength: 8 }}
          required
          title="8 character minimum"
          style={{ margin: ".25rem" }}
          label="Register Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          inputProps={{ minLength: 8 }}
          required
          title="8 character minimum"
          style={{ margin: ".25rem" }}
          label="Register Password"
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
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default Register;
