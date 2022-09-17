import React from 'react';

import Grid from '@mui/material/Grid';

import { Rooms } from '../features/rooms/Rooms';
import { Avatar } from '../features/avatar/Avatar';


export default function Home() {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
            <Rooms />
        </Grid>
        <Grid item xs={12} md={3}>
            <Avatar />
        </Grid>
    </Grid>
    );
}
