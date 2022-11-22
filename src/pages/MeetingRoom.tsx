import React from 'react';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'
import WorkTimeline from '../components/WorkTimeline';

export default function MeetingRoomPage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Meeting Room</Typography><br/>

            <Typography variant="body1" component="p">
            Here's a a list of my work experiences and a description of what I used to do during each of them.
            </Typography><br/>
            <br/>
            <WorkTimeline />
            <br/>
        </>
    );
}
