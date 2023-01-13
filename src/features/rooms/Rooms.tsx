import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useSound from 'use-sound';

import Grid from '@mui/material/Grid';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    setActiveRoomAsVisited,
    selectActiveRoom,
    selectRoomStatuses,
    RoomPossibleStates
} from './roomsSlice';
import { incrementSeen, incrementVisited } from '../coins/coinsSlice'

import { Room } from './Room';

// Sounds import
import flipcardSfx from '../../sounds/flipcard.mp3'
import showerSfx from '../../sounds/shower.mp3'
import bellSfx from '../../sounds/bell-ring.mp3'
import paperSfx from '../../sounds/paper.mp3'
import laserSfx from '../../sounds/laser-gun.mp3'
import phoneSfx from '../../sounds/phone-ringing.mp3'
import laptopSfx from '../../sounds/laptop.mp3'
import cashSfx from '../../sounds/cash-register.mp3'
import coffeeSfx from '../../sounds/coffee.mp3'
import correctSfx from '../../sounds/correct.mp3'


export function Rooms() {
    const pages = ['reception', 'meeting_room', 'bathroom',
                   'office', 'store', 'contact',
                   'coffee', 'lab', 'library']

    const activeRoom = useAppSelector(selectActiveRoom);
    const roomStatuses = useAppSelector(selectRoomStatuses);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const [moveSound] = useSound(flipcardSfx, { playbackRate: 4, interrupt: true })
    const [showerSound] = useSound(showerSfx, { volume: 0.1, interrupt: true,
                                                sprite: { default: [1000, 2500]} })
    const [bellSound] = useSound(bellSfx, { volume: 0.5, playbackRate: 2, interrupt: true,
                                            sprite: { default: [500, 5500]} })
    const [cashSound] = useSound(cashSfx, { volume: 0.25, playbackRate: 2, interrupt: true,
                                            sprite: { default: [0, 2000]} })
    const [paperSound] = useSound(paperSfx, { volume: 0.25, playbackRate: 1, interrupt: true,
                                            sprite: { default: [600, 4000]} })
    const [laserSound] = useSound(laserSfx, { volume: 0.1, playbackRate: 2, interrupt: true,
                                            sprite: { default: [0, 2000]} })
    const [laptopSound] = useSound(laptopSfx, { volume: 0.35, playbackRate: 0.8, interrupt: true,
                                            sprite: { default: [0, 1500]} })
    const [phoneSound] = useSound(phoneSfx, { volume: 0.35, playbackRate: 2, interrupt: true,
                                            sprite: { default: [0, 2000]} })
    const [coffeeSound] = useSound(coffeeSfx, { volume: 0.35, playbackRate: 2, interrupt: true,
                                            sprite: { default: [0, 4000]} })
    const [correctSound] = useSound(correctSfx, { volume: 0.35, playbackRate: 2, interrupt: true,
                                            sprite: { default: [0, 2000]} })
    const sounds = [
        bellSound, correctSound, showerSound,
        laptopSound, cashSound, phoneSound,
        coffeeSound, laserSound, paperSound,
    ]

    const isClickable = (index: number, state: RoomPossibleStates) => {
        // A room is clickable if it's next to the active room
        if (state !== 'notSeen') return true
        if (window.innerWidth > 900) {
            if (activeRoom < 6 && activeRoom === index - 3) return true
            if (activeRoom > 2 && activeRoom === index + 3) return true
            if (activeRoom % 3 !== 0 && activeRoom === index + 1) return true
            if (activeRoom % 3 !== 2 && activeRoom === index - 1) return true
        } else {
            if ((roomStatuses[index - 1] !== 'notSeen' && index > 0) ||
                (roomStatuses[index + 1] !== 'notSeen' && index < 8)) return true
        }
        return false
    }
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key
            switch (keyName) { 
                case 'ArrowDown':
                    moveSound()
                    dispatch(moveDown())
                    dispatch(incrementSeen())
                    break
                case 'ArrowUp':
                    moveSound()
                    dispatch(moveUp())
                    dispatch(incrementSeen())
                    break
                case 'ArrowLeft':
                    moveSound()
                    dispatch(moveLeft())
                    dispatch(incrementSeen())
                    break
                case 'ArrowRight':
                    moveSound()
                    dispatch(moveRight())
                    dispatch(incrementSeen())
                    break
                case 'Enter':
                    event.preventDefault()
                    sounds[activeRoom]({ id: 'default' })
                    dispatch(setActiveRoomAsVisited())
                    dispatch(incrementVisited())
                    navigate(`/${pages[activeRoom]}`)
                    break
                default: break
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [activeRoom])

    return (
        <Grid container spacing={2}>
            {roomStatuses.map((r, i) => 
                <Grid key={`Room_${i}`} item xs={12} md={4}>
                    <Room state={r}
                            page={pages[i]}
                            active={activeRoom === i}
                            clickable={isClickable(i, r)}
                            roomNumber={i}/>
                </Grid>
            )}
        </Grid>
    );
}
