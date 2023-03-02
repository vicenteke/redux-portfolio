import React from 'react';

import IconButton from '@mui/material/IconButton'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSound, enableSound, disableSound } from './soundSlice';

export default function SoundButton() {
    const soundEnabled = useAppSelector(selectSound);
    const dispatch = useAppDispatch()

    const enable = () => {
        dispatch(enableSound())
    }

    const disable = () => {
        dispatch(disableSound())
    }

    if (soundEnabled) {
        return (
            <IconButton
                aria-label='Disable sound button'
                onClick={disable}
                sx={{ color: 'white', mr: {md: 4, xs: 1} }}
            >
                <VolumeUpIcon />
            </IconButton>
        )
    }

    return (
        <IconButton
            aria-label='Enable sound button'
            onClick={enable}
            sx={{ color: 'white', mr: {md: 4, xs: 1} }}
        >
            <VolumeOffIcon />
        </IconButton>
    )
}
