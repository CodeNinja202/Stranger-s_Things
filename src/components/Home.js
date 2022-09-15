

import React from "react";
import logoIMG from './images/homePGMovement.gif';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Home = () => {
  return (
  <div>
    <img src={logoIMG } style={{width:'100%', marginTop:'10%'}}/>
    <Link style={{ textDecoration: "none" }} to="/register">
    <Button
              style={{
                marginTop: "2%",
                width: "100%",
                borderRadius: 35,
                background: "black",
                opacity: "70%",
                color: "white",
              
              }}
              variant="outlined"
              href="#outlined-buttons"
            >
    
    Don't have an account? Sign Up
    </Button>
  </Link>
  
  </div>
  );
};

export default Home;
