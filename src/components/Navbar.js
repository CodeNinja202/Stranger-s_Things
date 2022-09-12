import React from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
const Navbar = ({ logout, token }) => {
  return (
    <Paper elevation={5}>
      <header>
        <nav className="navBar">
          <h1>Stranger's Things</h1>
          <Button>
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
