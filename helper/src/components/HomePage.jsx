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
            <Paper square='true'
                sx={{
                    height: '100%',
                    position: 'relative',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('./assets/homepage-background.jpeg')`,
                }}
            >
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
                            <Link to="/quiz" style={{ color: 'white', textDecoration: 'none' }}><Button color="inherit" variant="contained" sx={{ backgroundColor: '#4682B4' }}>TRY NOW</Button> </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            <Blog />
        </>
    )
}

export default HomePage






