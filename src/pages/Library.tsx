import React from 'react';
import ReturnButton from '../components/ReturnButton'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function LibraryPage() {
    return (
        <>
            <ReturnButton />
            <br/><br/><Typography variant="h1" component="p">Library</Typography><br/>
            <Typography variant="body1" component="p">
            Surprisingly enough, I have a <strong>Bachelor's degree in Mechatronics Engineering</strong> from Universidade Federal de Santa Catarina (UFSC), with Academic Honors. UFSC is among the best LATAM universities, if you're a curious person you can learn more at <Link href="" target="_blank" rel="noreferrer" underline="hover">{'https://en.ufsc.br/'}</Link>.
            </Typography><br/>
            <Typography variant="body1" component="p">
            Usually, no one knows what mechatronics is about, so let me briefly explain it. It is something like mechanics + electronics + computing. The main focus for us was on <strong>embedded systems</strong>, which include <strong>microcontrollers, real-time operating systems,</strong> some <strong>electronics</strong> and not so much <strong>mechanics</strong>.
            </Typography><br/>
            <Typography variant="body1" component="p">
            That creates a foundation over a broad set of subjects - and that's the main reason I've chosen mechatronics. We learn about: Internet of Things (IoT), Artificial Intelligence (AI), PLC, FPGAs, microcontrollers, operating systems, networking, control, power electronics, motors, materials, structures, to name a few.
            </Typography><br/>
            <Typography variant="body1" component="p">
            For sure, I've found out that "my thing" is software. No mechanics and not that much electronics. <strong>I had learnt to code before choosing to pursue any degree</strong>, but it was during those years that I knew I would become a <strong>software engineer</strong>.
            </Typography><br/>
            <Typography variant="body1" component="p">
            Now that you know about what I've studied formally, why not continuing to explore other rooms?
            </Typography>
        </>
    );
}
