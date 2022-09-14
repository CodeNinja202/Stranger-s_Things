import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import navPIC from "./images/navBar.jpeg";



const Navbar = ({ logout, token }) => {
  return (
    <Paper elevation={5} style={{ width: "100%" }}>
      <header>
        <nav className="navBar">
          <img src={navPIC} />

          <Link style={{ textDecoration: "none" }} to="/">
            <Button
                           style={{
                            marginTop:"25%",
                            borderColor:'black',
                            width:"5rem",
                            borderRadius: 35,
                            backgroundColor: "orange",
                            color: "black",
                          }} variant="outlined"
            >
              Home
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/posts">
            <Button
              style={{
                marginTop:"25%",
                borderColor:'black',
                width:"5rem",
                borderRadius: 35,
                backgroundColor: "orange",
                color: "black",
              }} variant="outlined"
            >
              Posts
            </Button>
          </Link>

          {token ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/profile">
                <Button
                               style={{
                                marginTop:"25%",
                                borderColor:'black',
                                width:"5rem",
                                borderRadius: 35,
                                backgroundColor: "orange",
                                color: "black",
                              }} variant="outlined"
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
                                marginTop:"25%",
                                borderColor:'black',
                                width:"5rem",
                                borderRadius: 35,
                                backgroundColor: "orange",
                                color: "black",
                              }} variant="outlined"
                >
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                            style={{
                              marginTop:"25%",
                              borderColor:'black',
                              width:"5rem",
                              borderRadius: 35,
                              backgroundColor: "orange",
                              color: "black",
                            }} variant="outlined"
              >
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
