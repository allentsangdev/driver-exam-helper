import * as React from 'react';
import Grid from '@mui/material/Grid';
import Markdown from './Markdown';
import { useState, useEffect } from 'react'


export default function BlogContent(props) {
    const {blog, backgroundImage} = props
    
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(blog)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <>
            <Grid container display='flex' justifyContent='center'>
                <Grid container item display='flex' flexDirection='column' gap='0.5em' p='2em' md={9} height='20em' boxShadow='2'
                    style={{
                        backgroundImage: backgroundImage,
                        marginBottom: '0',
                        color: '#fff',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}>
                </Grid>
            </Grid>
            <Grid container display='flex' justifyContent='center' sx={{padding:'2em'}}>
                <Grid item md={9}>
                    <Markdown className="markdown">
                        {markdown}
                    </Markdown>
                </Grid>

            </Grid>
        </>

    )
}
