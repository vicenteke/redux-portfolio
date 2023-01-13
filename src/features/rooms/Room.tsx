import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks'
import useSound from 'use-sound';

import Skeleton from '@mui/material/Skeleton';

import {
    RoomPossibleStates,
    setRoomAsVisited,
    setActive
} from './roomsSlice';
import { incrementSeen, incrementVisited } from './../coins/coinsSlice'

import LoadingPossibleStates from '../../constants/LoadingPossibleStates'
import showerSfx from '../../sounds/shower.mp3'
import bellSfx from '../../sounds/bell-ring.mp3'
import paperSfx from '../../sounds/paper.mp3'
import laserSfx from '../../sounds/laser-gun.mp3'
import phoneSfx from '../../sounds/phone-ringing.mp3'
import laptopSfx from '../../sounds/laptop.mp3'
import cashSfx from '../../sounds/cash-register.mp3'
import coffeeSfx from '../../sounds/coffee.mp3'
import correctSfx from '../../sounds/correct.mp3'


export interface RoomProps {
    active: boolean,
    state: RoomPossibleStates,
    page: string,
    clickable: boolean,
    roomNumber: number
}

export function Room({ active, state, page, clickable, roomNumber }: RoomProps) {
    const [loadingState, setLoadingState] = useState<LoadingPossibleStates>('loading')
    const roomId = `room-${roomNumber}`
    const imgBasePath = '/resources/img/rooms/'
    const imgSuffixes = {
        'notSeen': 'not_seen.svg',
        'seen': '_seen.svg',
        'visited': '_visited.svg',
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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

    const handleRoomClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const target = event.currentTarget
        if (target.id === roomId) {
            if (clickable) {
                sounds[roomNumber]({ id: 'default' })
                dispatch(setActive(roomNumber))
                if (state === 'notSeen') {
                    dispatch(incrementSeen())
                } else if (active) {
                    dispatch(setRoomAsVisited(roomNumber))
                    dispatch(incrementVisited())
                    navigate(`/${page}`)
                }
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
