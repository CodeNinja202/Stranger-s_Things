import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import navPIC from "./images/navBar.jpeg";

const Navbar = ({ logout, token }) => {
  return (
   
      <header>
           <img style={{width:"auto"}}  src={navPIC} />
        <nav className="navBar">
        
        
          
      
          <Link style={{ textDecoration: "none" }} to="/">
            <Button
              style={{
                marginTop:'20%',
                borderColor: "black",
                width: "15rem",
                borderRadius: 35,
                backgroundColor: "orange",
                color: "black",
              }}
              variant="outlined"
            >
              Home
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/posts">
            <Button
              style={{
                marginTop:'20%',
                borderColor: "black",
                width: "15rem",
                borderRadius: 35,
                backgroundColor: "orange",
                color: "black",
              }}
              variant="outlined"
            >
              Posts
            </Button>
          </Link>

          {token ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/profile">
                <Button
                  style={{
                    marginTop:'20%',
                    borderColor: "black",
                    width: "15rem",
                    borderRadius: 35,
                    backgroundColor: "orange",
                    color: "black",
                  }}
                  variant="outlined"
                >
                  Profile
                </Button>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => logout()}
              >
                <Button
                  style={{
                    marginTop:'20%',
                    borderColor: "black",
                    width: "15rem",
                    borderRadius: 35,
                    backgroundColor: "orange",
                    color: "black",
                  }}
                  variant="outlined"
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                style={{
                  marginTop: "20%",
                  borderColor: "black",
                  width: "15rem",
                  borderRadius: 35,
                  backgroundColor: "orange",
                  color: "black",
                }}
                variant="outlined"
              >
                Login
              </Button>
            </Link>
          )}
         
        </nav>
        
      </header>
   
  );
};

export default Navbar;
