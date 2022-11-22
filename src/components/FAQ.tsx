import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';


export default function FAQ() {
    const data = [
        {
            title: "What is this?",
            content: <>This is a portfolio structured as a game. Each room will be showing a different piece of information and you will gather coins as you explore it.</>
        },
        {
            title: "To whom is this for?",
            content: <>In general, to anyone interested in portfolios. That would embrace: clients, employers, recruiters and curious people.</>
        },
        {
            title: "What will I find here?",
            content: <>Essentialy, this is a portfolio, so you will find projects I've made, professional experience, technical background and so on. I took the liberty to add a few more things, though. To find it, just visit each room an pay attention to what the avatar is saying: it will give you a brief summary of the content inside each room.</>
        },
        {
            title: "How do I use it?",
            content: <>If you have a keyboard, use the arrows to navigate, press enter to visit a room and Esc to return to home. Alternatively, click on the rooms and links to do the exact same thing. The mobile versions mimics the desktop in the sense that you should "move" through rooms, rather than "skipping" to the last one.</>
        },
        {
            title: "Why is it a game?",
            content: <>Basically because it looked funnier, but also due to the fact that it sounds tedious to read portfolios that are "content-only", like a resumé. Moreover, it was like a study for me, as I could practice some new technologies for me (fundamentally React and Redux at the time I'm witting this).</>
        },
        {
            title: "Who made this?",
            content: <>My name is Vicente Knihs Erbs. I'm a (full-stack) software developer and this is the portfolio I've made. You can find me on <Link href="https://www.linkedin.com/in/vicente-knihs-erbs-335b95209/" target="_blank" rel="noreferrer" underline="hover">{'LinkedIn'}</Link>, my email is <Link href="mailto:vicenteknihs@gmail.com" target="_blank" rel="noreferrer" underline="hover">{'vicenteknihs@gmail.com'}</Link> or call me +55 (47) 99627-9577 (Brazil). Let's chat!</>
        }
    ]

    return (
        <>
        {data.map((accordion) => {
            return (
                <Accordion key={accordion.title}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>{accordion.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {accordion.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
        <br/>
        </>
    );
}
