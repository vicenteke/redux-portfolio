import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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


export function Rooms() {
    const pages = ['page', 'page', 'page', 'page', 'page', 'page', 'page', 'page', 'page']

    const activeRoom = useAppSelector(selectActiveRoom);
    const roomStatuses = useAppSelector(selectRoomStatuses);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    const isClickable = (index: number, state: RoomPossibleStates) => {
        // A room is clickable if it's next to the active room
        if (state !== 'notSeen') return true
        if (window.innerWidth > 900) {
            if (activeRoom < 6 && activeRoom === index - 3) return true
            if (activeRoom > 2 && activeRoom === index + 3) return true
            if (activeRoom % 3 !== 0 && activeRoom === index + 1) return true
            if (activeRoom % 3 !== 2 && activeRoom === index - 1) return true
        } else {
            if (activeRoom === index - 1 || activeRoom === index + 1) return true 
        }
        return false
    }
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key
            switch (keyName) { 
                case 'ArrowDown':
                    dispatch(moveDown())
                    dispatch(incrementSeen())
                    break
                case 'ArrowUp':
                    dispatch(moveUp())
                    dispatch(incrementSeen())
                    break
                case 'ArrowLeft':
                    dispatch(moveLeft())
                    dispatch(incrementSeen())
                    break
                case 'ArrowRight':
                    dispatch(moveRight())
                    dispatch(incrementSeen())
                    break
                case 'Enter':
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
    }, [])

    return (
        <Grid container spacing={1}>
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
