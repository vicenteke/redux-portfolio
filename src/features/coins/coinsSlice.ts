import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CoinsState {
    value: number
}

const initialState: CoinsState = {
    value: 0
};

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        incrementSeen: (state) => {
            state.value += 10
        },
        incrementVisited: (state) => {
            state.value += 100
        },
        resetCoins: (state) => {
            state.value = 0
        },
    }
});

export const { decrement, increment, incrementSeen, incrementVisited, resetCoins } = coinsSlice.actions;

export const selectCoins = (state: RootState) => state.coins.value;

export default coinsSlice.reducer;
