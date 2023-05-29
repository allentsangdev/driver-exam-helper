import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{marginBottom:0,backgroundColor: '#1e2e46',}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1}}>
          <Typography textAlign='center' borderRadius='4%' bgcolor='white' color='#1e2e46' width='120px' sx={{cursor:'default'}} > Driver Quizlet </Typography>
          </Box>
          <Link to="/" style={{color: 'white', textDecoration: 'none'}}> <Button variant="contained" sx={{backgroundColor:"#4682B4"}}>HOME</Button></Link>
          <Link to="/signin" style={{color: 'white', textDecoration: 'none'}}><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}