import React from 'react';
import Typography from '@mui/material/Typography';
import ReturnButton from '../components/ReturnButton';
import AvatarShop from '../components/AvatarShop';


export default function StorePage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Store</Typography><br/>

            <Typography variant="body1" component="p">
            Hey, if you're here it means you are enjoying this portfolio, thank you! Here you can acquire new avatars with the coins you earned. Keep visiting the other rooms to get all of them!
            </Typography><br/>
            <AvatarShop />
        </>
    );
}
