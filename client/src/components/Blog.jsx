import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const posts = [
    {
        date: "27 MAR",
        title: "10 Common Mistakes New Drivers Make",
        content: "",
        image: "./assets/post-new-driver-mistake.jpeg",
        route: "/blog-01"
    },
    {
        date: "15 NOV",
        title: "10 Winter Driving Tips From Young Drivers of Canada",
        content: "",
        image: "./assets/post-winter-driving.jpeg",
        route: "/blog-02"
    },
    {
        date: "14 OCT",
        title: "Ease into Fall Driving",
        content: "",
        image: "./assets/post-fall-driving.jpeg",
        route: "/blog-03"
    }
]

function Post(props) {
    return(
        <Grid item xs={8} md={3}>
            <Card sx={{Width:'100%', height:'100%'}}>
                <CardActionArea component='div' sx={{Width:'100%', height:'100%'}}>
                    <Link to={props.post.route} style={{textDecoration: 'none'}}>
                        <CardMedia
                            component="img"
                            sx={{ height: 160 }}
                            image={props.post.image}
                        />
                        <CardContent>
                            <Typography variant="h6"> {props.post.title} </Typography>
                            <Typography variant="subtitle1" color="text.secondary"> {props.post.date} </Typography>
                        </CardContent>
                    </Link>  
                </CardActionArea>            
            </Card>
        </Grid>
    )
}

function Blog() {
    return (
        
            <Grid container direction="row" justifyContent="center" alignItems='stretch' spacing={2} margin="2">
                <Grid item textAlign="center" xs={12}><Typography variant="h5"> QUIZLET BLOG </Typography> </Grid>
                {posts.map((post) => <Post post={post}/>)}
            </Grid>
        
    )
}

export default Blog