import React from 'react';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'
import ProjectsTimeline from '../components/ProjectsTimeline';


export default function OfficePage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Office</Typography><br/>
            <Typography variant="body1" component="p">
            Here is a compilation of projects I've made in the past years. With them, I could learn both hard and soft skills that, even though not being directly related, are important to what I do in software.
            </Typography><br/>
            <br/>
            <ProjectsTimeline />
            <br/>
        </>
    );
}
