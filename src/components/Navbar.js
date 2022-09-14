import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper  } from "@mui/material";
import navPIC from './images/navBar.jpeg'

const Navbar = ({ logout, token }) => {
  return (
    <Paper elevation={5}>
      <header>
        <nav className="navBar">
          <img src={navPIC}/>
          
            <Link style={{ textDecoration: "none" }} to="/">
            <Button >
              Home
              </Button>
            </Link>
          
          
            <Link style={{ textDecoration: "none" }} to="/posts">
            <Button>
              Posts
              </Button>
            </Link>
          
          {token ? (
            <>
              
                <Link style={{ textDecoration: "none" }} to="/profile">
                <Button>
                  Profile
                  </Button>
                </Link>
              
              
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => logout()}
                >
                  <Button>
                  Logout
                  </Button>
                </Link>
              
            </>
          ) : (
           
            
            <Link style={{ textDecoration: "none" }} to="/login">
                <Button>
                Login
                </Button>
              </Link>
          
          )}
        </nav>
      </header>
    </Paper>
  );
};

export default Navbar;
