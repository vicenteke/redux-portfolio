import React from 'react';

import Button from '@mui/material/Button'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import { useAppSelector } from '../../app/hooks';
import {
    selectCoins
} from './coinsSlice';

export function Coins() {
    const coins = useAppSelector(selectCoins);

    return (
        <Button
            color="warning"
            variant="contained"
            startIcon={<MonetizationOnRoundedIcon />}
        >
            {coins}
        </Button>
    );
}
