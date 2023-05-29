import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';

function Copyright() {
  return (
    <Typography variant="subtitle2" fontWeight='light' color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        DriverQuizlet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  return (
    <Box align='center' >
        <Divider variant="fullWidth" style={{margin:'1rem', width:'75%'}} />
        <img src={'./assets/driver-quizlet-logo.png'} width='95' height='60'/>
        <Copyright />
        <InstagramIcon sx={{margin:1}}></InstagramIcon>
        <TelegramIcon sx={{margin:1}}></TelegramIcon>
        <GitHubIcon sx={{margin:1}}></GitHubIcon>
        <LinkedInIcon sx={{margin:1}}></LinkedInIcon>
    </Box>
  );
}


export default Footer;