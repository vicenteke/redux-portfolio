import React from 'react';
import ReturnButton from '../components/ReturnButton'
import FAQ from '../components/FAQ'

export default function ReceptionPage() {
    return (
        <>
            <ReturnButton />
            <h1>Reception</h1>

            <p>
            Welcome to my portfolio! I believe it can be boring sometimes to keep looking for software developers CVs and stuff, so I decided to create a nicer experience for you. That's why this is actually a game.
            </p>
            <p>
            How to use it:
            </p>
            <ul>
                <li>To move between rooms, click on the rooms or use the keyboard arrows;</li>
                <li>To enter a room, either double click or press enter</li>
                <li>To leave a room, press esc or use the links with an arrow shape on the screen.</li>
            </ul>
            <p>
            I'll be here to help you as an avatar. You can return to this room whenever you want to, so you can find some help. I hope you enjoy this "game portfolio" as much as I did while developing it. Have fun!
            </p>
            <br/>
            <h2>FAQ</h2>
            <FAQ />
            <ReturnButton />
        </>
    );
}
