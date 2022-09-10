import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    resetRooms,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    setActiveRoomAsVisited,
    selectActiveRoom,
    selectRoomStatuses
} from './roomsSlice';

import { incrementSeen, incrementVisited, resetCoins } from '../coins/coinsSlice'

export function Rooms() {
    const activeRoom = useAppSelector(selectActiveRoom);
    const roomStatuses = useAppSelector(selectRoomStatuses);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyName = event.key;
            console.log('keydown event\n\nkey:', keyName);
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
                    navigate('/page')
                    break
                default: break
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [dispatch])

    return (
        <>
            <p>Active: {activeRoom}</p>
            <p>Statuses: <br/>{roomStatuses.map((r, i) => {
                if (i % 3 === 2) {
                    return <>{r}<br/></>
                } else {
                    return <>{r}, </>
                }
            })}</p>
            <button onClick={() => {
                dispatch(resetRooms())
                dispatch(resetCoins())
            }}>reset</button>
        </>
    );
}
