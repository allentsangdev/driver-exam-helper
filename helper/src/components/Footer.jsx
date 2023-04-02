import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        DriverQuizlet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Contact() {
    return(
        <>
        </>
    )
}

function AboutUs() {
    return(
        <>
        </>
    )
}

function Footer() {

  return (
    <Box sx={{ bgcolor: '#E1EBEE', py: 3, marginTop:100, position:"absolute", bottom:0, right:0, left:0 }}>
      <Container>
       
        <Copyright />
      </Container>
    </Box>
  );
}


export default Footer;