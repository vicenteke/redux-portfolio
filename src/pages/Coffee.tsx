import React from 'react';
import ReturnButton from '../components/ReturnButton'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function CoffeePage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="h1">Coffee</Typography><br/>
            <Typography variant="body1" component="p">
            Hey, I'm glad you are interested in my portfolio! Sometimes I feel that portfolios are too impersonal or cold, like a resumé in Times New Roman. If you want to, I would like to share a little of what I do beyond working and coding - things that make me feel like me.
            </Typography><br/>
            <Typography variant="h2" component="h2">Music</Typography><br/>
            <Typography variant="body1" component="p">
            First of all, music has been part of my life since I was a child. Right now, I'm the bassist of what I would classify as an Indie Rock band. It's called <i>Pétala Quinto</i> and we write our own songs. Check it out on <Link href="https://open.spotify.com/artist/6gxWnvNLTTXhQMniSYxFUD" target="_blank" rel="noreferrer" underline="hover">{'Spotify'}</Link> or <Link href="https://www.youtube.com/channel/UCMBGcJA16AGJM-OMk0QYekw" target="_blank" rel="noreferrer" underline="hover">{'YouTube'}</Link> or werever you want to - other streamings platforms or even on <Link href="https://www.instagram.com/petalaquinto/" target="_blank" rel="noreferrer" underline="hover">{'Instagram'}</Link>.
            </Typography><br/>
            <Typography variant="body1" component="p">
            It's something important for me. Moreover, it has given me several opportunities, for instance for volunteering.
            </Typography><br/>
            <Typography variant="h2" component="h2">Volunteering</Typography><br/>
            <Typography variant="body1" component="p">
            Luckily, I could participate in some volunteering projects. Now, there are two that I take part: Escola dos Anjos and Movimento Campista.
            </Typography><br/>
            <Typography variant="body1" component="p">
            <strong>Escola dos Anjos</strong>, roughly translated to <i>Angel's School</i>, is a social project where needy children between 8 and 12 years old enjoy a day playing and learning "how an angel behaves on earth". Since 2018, I participate mostly with the music interactions and any infrastructure organization required in my home city. Learn about Escola dos Anjos on Escola dos Anjos' Instagram profile: <Link href="https://www.instagram.com/escoladosanjos/" target="_blank" rel="noreferrer" underline="hover">{'@escoladosanjos'}</Link>
            </Typography><br/>
            <Typography variant="body1" component="p">
            <strong>Movimento Campista</strong> involves Catholic camping retreats separated in different age groups, where I've been taking part in the music teams for children and teenagers since 2017.
            </Typography>
        </>
    );
}
