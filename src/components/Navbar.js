import React from 'react';
import { Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import { Grid } from '@mui/material';
const Navbar = ({ logout, token }) => {
  return (
    
    <Paper elevation={3}>
    <header>
      <nav className='navBar'>
        <h1>Stranger's Things</h1>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        {
          token ? (
            <>
              <Link to='/profile'>Profile</Link>
              <Link to='/' onClick={() => logout()}>Logout</Link>
            </>
          ) : (
            <Link to='/login'>Login</Link>
          )
        }
      </nav>
    </header>
    </Paper>
   
  )
}

export default Navbar;
