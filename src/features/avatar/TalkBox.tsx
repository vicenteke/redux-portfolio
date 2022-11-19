import React from 'react';

import Box from '@mui/material/Box';

export interface TalkBoxProps {
    room: number,
    active: boolean
}

const receptionText = <>
    <strong className="text-center">Reception</strong><br/><br/>
    Welcome to my portfolio! Use the mouse or the arrows to navigate and press enter to check a room.<br/>
    Here at the reception you will find some help and understand what's going on.
</>

const meetingRoomText = <>
    <strong className="text-center">Meeting Room</strong><br/><br/>
    As we can see over here...<br/>
    I've made a brief summary of my professional experience, showing what I've been working with recently.
</>

const bathroomText = <>
    <strong className="text-center">Bathroom</strong><br/><br/>
    Hey, watch out!<br/>
    There's nothing for you to see here! Check the other rooms.
</>

const officeText = <>
    <strong className="text-center">Office</strong><br/><br/>
    TODO<br/>
    I brought you some of the projects I've made apart from work. That's how software people have fun most of their nights.
</>

const storeText = <>
    <strong className="text-center">Store</strong><br/><br/>
    Time to go shopping!<br/>
    What about some fancier looking?
</>

const contactText = <>
    <strong className="text-center">Phone</strong><br/><br/>
    Hello? Oh ok...<br/>
    I believe it's for you.
</>

const coffeeText = <>
    <strong className="text-center">Café</strong><br/><br/>
    What about we get to know each other a little bit?<br/>
    I would love to share with you some things I do as a person, rather than a <i>programmer</i>.
</>

const labText = <>
    <strong className="text-center">Lab</strong><br/><br/>
    We are still working on some researches.<br/>
    I would keep exploring other spaces if I were you.
</>

const libraryText = <>
    <strong className="text-center">Library</strong><br/><br/>
    Shhh.<br/>
    Let me give you some information about my studies and background.
</>

export function TalkBox({ room, active }: TalkBoxProps) {
    const roomTexts = [
        receptionText,
        meetingRoomText,
        bathroomText,
        officeText,
        storeText,
        contactText,
        coffeeText,
        labText,
        libraryText,
    ]

    // Render actual component
    return (
        <Box className='talkbox-box'>
            <Box className={active ? 'talkbox talkbox-active' : 'talkbox'}>
                {active ? roomTexts[room]: ''}
            </Box>
        </Box>
    );
}
