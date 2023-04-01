import Blog from './Blog';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HomePage() {

    return(
<>        
        <Paper
      sx={{
        height:'45vh',
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('./assets/homepage-background.jpeg')`,
      }}
    >
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Want to ace your dirving exam?
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Try our quizlet now!
            </Typography>
            <Button color="inherit" variant="contained" sx={{backgroundColor: '#4682B4'}}><Link to="/quiz" style={{color: 'white', textDecoration: 'none' }}> TRY NOW </Link></Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>

        <Blog/>
        </>
    )
}

export default HomePage






