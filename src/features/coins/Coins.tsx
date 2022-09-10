import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    resetCoins,
    selectCoins
} from './coinsSlice';

export function Coins() {
    const coins = useAppSelector(selectCoins);
    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(resetCoins())}>
            Coins: {coins}
        </button>
    );
}
