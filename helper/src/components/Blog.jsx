import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const posts = [
    {
        date: "27 MAR",
        title: "10 Common Mistakes New Drivers Make",
        content: "",
        image: "./assets/post-new-driver-mistake.jpeg"
    },
    {
        date: "15 NOV",
        title: "10 Winter Driving Tips From Young Drivers of Canada",
        content: "",
        image: "./assets/post-winter-driving.jpeg"
    },
    {
        date: "14 OCT",
        title: "Ease into Fall Driving",
        content: "",
        image: "./assets/post-fall-driving.jpeg"
    }
]

function Post(props) {
    return(
        
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {props.post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {props.post.date}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={props.post.image}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    )
}


function Blog() {
    return (
        <>
            {posts.map((post) => <Post post={post}/>)}
        </>
    )
}

export default Blog