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
            <Grid container display='flex' justifyContent='center'>
                <Grid container item display='flex' flexDirection='column' gap='0.5em' p='2em' md={9} height='20em' boxShadow='2'
                    style={{
                        backgroundImage: `url('./assets/homepage-background.jpeg')`,
                        marginBottom:'3em',
                        color: '#fff',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        }}>
                    
                            <Grid item>
                                <Typography variant="h3"> 
                                    Want to ace your dirving exam?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" gutterBottom>
                                    Try our quizlet now!
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link to="/quiz" style={{ color: 'white', textDecoration: 'none' }}><Button variant="contained" sx={{ backgroundColor: '#4682B4' }}>TRY NOW</Button> </Link>
                            </Grid>
                
    
                </Grid>
            </Grid>

            <Blog />
        </>
    )
}

export default HomePage






