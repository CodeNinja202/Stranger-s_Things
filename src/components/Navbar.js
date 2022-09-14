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
          <Button >
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/posts">
              Posts
            </Link>
          </Button>
          {token ? (
            <>
              <Button>
                <Link style={{ textDecoration: "none" }} to="/profile">
                  Profile
                </Link>
              </Button>
              <Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              </Button>
            </>
          ) : (
            <Button>
              <Link style={{ textDecoration: "none" }} to="/login">
                Login
              </Link>
            </Button>
          )}
        </nav>
      </header>
    </Paper>
  );
};

export default Navbar;
