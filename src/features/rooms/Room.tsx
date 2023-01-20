import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import useSound from 'use-sound';

import Skeleton from '@mui/material/Skeleton';

import {
    RoomPossibleStates,
    setRoomAsVisited,
    setActive
} from './roomsSlice';
import { incrementSeen, incrementVisited } from './../coins/coinsSlice'
import { selectSound } from '../sound/soundSlice';

import LoadingPossibleStates from '../../constants/LoadingPossibleStates'

export interface RoomProps {
    active: boolean,
    state: RoomPossibleStates,
    page: string,
    roomNumber: number,
    sounds: Array<any>
}

export function Room({ active, state, page, roomNumber, sounds }: RoomProps) {
    const [loadingState, setLoadingState] = useState<LoadingPossibleStates>('loading')
    const soundEnabled = useAppSelector(selectSound)

    const roomId = `room-${roomNumber}`
    const imgBasePath = '/resources/img/rooms/'
    const imgSuffixes = {
        'notSeen': 'not_seen.svg',
        'seen': '_seen.svg',
        'visited': '_visited.svg',
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRoomClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const target = event.currentTarget
        if (target.id === roomId) {
            dispatch(setActive(roomNumber))
            if (state === 'notSeen') {
                if (soundEnabled)
                    sounds[sounds.length - 1]()   // Play move sound
                dispatch(incrementSeen())
            } else {
                if (soundEnabled)
                    sounds[roomNumber]({ id: 'default' })
                dispatch(setRoomAsVisited(roomNumber))
                dispatch(incrementVisited())
                navigate(`/${page}`)
            }
        }
    }

    useEffect(() => {
        const loadImage = (path: string) => {
            const img = new Image();
            img.onload = () => {
                setLoadingState('ready')
            };
            img.onerror = () => {
                setLoadingState('error')
            };
            img.src = `${imgBasePath}${path}`;
        }
    
        const loadNotSeenImg = () => {
            return loadImage('not_seen.svg')
        }

        if (loadingState === 'loading') {
            if (state === 'notSeen') {
                loadNotSeenImg()
            } else {
                loadImage(page + imgSuffixes[state])
            }
        }
    }, [loadingState, state, page])

    // Render Suspense while image is loading
    if (loadingState === 'loading') {
        return (
            <>
                <Skeleton variant="rounded" animation="wave" className='skeleton-room'/>
            </>
        )
    }

    let image: JSX.Element = <></>

    // Render actual component
    if (state === 'notSeen') {
        image = <img className="room-img" src={`${imgBasePath}not_seen.svg`} alt="unknown room slot" />
    } else {
        image = <img className="room-img" src={imgBasePath + page + imgSuffixes[state]} alt={`${page} room slot`} />
    }

    return (
        <div id={roomId} className={active ? 'room-btn room-btn-active' : 'room-btn'} onClick={handleRoomClick}>
            {image}
        </div>
    )
}
