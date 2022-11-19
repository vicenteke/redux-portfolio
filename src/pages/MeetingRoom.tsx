import React from 'react';
import ReturnButton from '../components/ReturnButton'
import WorkTimeline from '../components/WorkTimeline';

export default function MeetingRoomPage() {
    return (
        <>
            <ReturnButton />
            <h1>Meeting Room</h1>

            <p>
            Here's a a list of my work experiences and a description of what I used to do during each of them.
            </p>
            <br/>
            <WorkTimeline />
            <br/>
            <ReturnButton />
        </>
    );
}
