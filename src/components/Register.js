import React, { useState } from "react";
import { registerUser } from "../api";
import { Button, TextField } from "@mui/material";

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
    
    <form className="mainPg"
   
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <h1>Create Account</h1>
      <TextField style={{margin: ".25rem"}}
        label="Register Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField style={{margin: ".25rem"}}
        label="Register Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button 
       style={{height: '3rem', margin: ".25rem"}}
      variant="contained" type="submit">Sign Up</Button>
    </form>
  );
};

export default Register;