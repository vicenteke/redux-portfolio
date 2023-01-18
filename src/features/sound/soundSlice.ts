import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SoundState {
    enabled: boolean
}

const initialState: SoundState = {
    enabled: true
};

export const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        enableSound: (state) => {
            state.enabled = true
        },
        disableSound: (state) => {
            state.enabled = false
        },
        toggleSound: (state) => {
            state.enabled = !state.enabled
        },
        resetSound: (state) => {
            state.enabled = true
        },
    }
});

export const { enableSound, disableSound, toggleSound, resetSound } = soundSlice.actions;

export const selectSound = (state: RootState) => state.sound.enabled;

export default soundSlice.reducer;
