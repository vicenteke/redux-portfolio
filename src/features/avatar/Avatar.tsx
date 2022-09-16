import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack'

import { useAppSelector } from '../../app/hooks';
import LoadingPossibleStates from '../../constants/LoadingPossibleStates'
import { selectAvatar } from './avatarSlice';
import { selectActiveRoom } from '../rooms/roomsSlice';

import { TalkBox } from './TalkBox';


export function Avatar() {
    const avatarImages = ['avatar_1.png', 'avatar_2.jpeg']
    const imgBasePath = '/resources/img/'

    const avatar = useAppSelector(selectAvatar);
    const room = useAppSelector(selectActiveRoom);
    const [loadingState, setLoadingState] = useState<LoadingPossibleStates>('loading')
    const [showText, setShowText] = useState<boolean>(true)

    useEffect(() => {
        const loadImage = (path: string) => {
            const img = new Image();
            img.onload = () => {
                setTimeout(() => setLoadingState('ready'), 1000)
            };
            img.onerror = () => {
                setLoadingState('error')
            };
            img.src = `${imgBasePath}${path}`;
        }

        if (loadingState === 'loading') {
            loadImage(avatarImages[avatar])
        }
    }, [loadingState])

    const toggleText = () => {
        setShowText(!showText)
    }

    // Render Suspense while image is loading
    if (loadingState === 'loading') {
        return (
            <>
                <Skeleton variant="rounded" animation="wave" className='skeleton-talkbox'/>
                <Skeleton variant="circular" animation="wave" className='skeleton-avatar-head'/>
                <Skeleton variant="circular" animation="wave" className='skeleton-avatar-body'/>
            </>
        )
    }

    // Render actual component
    return (
            <Stack
            direction={{ xs: 'row-reverse', md: 'column' }}
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            alignItems={{ xs: 'flex-end', md: 'center' }}
            spacing={1}
            onClick={toggleText}
            className='avatar-box'
            >
                <TalkBox room={room} active={showText} />
                <Box className='avatar-image' alignSelf='end'>
                    <img src={`${imgBasePath}${avatarImages[avatar]}`} alt="helper avatar" />
                </Box>
            </Stack>
    );
}
