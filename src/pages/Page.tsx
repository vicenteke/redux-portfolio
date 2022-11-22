import React from 'react';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton'

export default function Page() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Hello World!</Typography><br/>
            <Typography variant="body1" component="p">
            </Typography><br/>
            <ReturnButton />
        </>
    );
}
