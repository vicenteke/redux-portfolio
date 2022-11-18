import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type AvatarStatus = 'locked' | 'unlocked'

export interface AvatarState {
    active: number,
    statuses: AvatarStatus[]
}

const initialState: AvatarState = {
    active: 0,
    statuses: ['unlocked', 'locked', 'locked', 'locked']
};

export const avatarSlice = createSlice({
    name: 'avatar',
    initialState,
    reducers: {
        resetAvatar: (state) => {
            state.active = initialState.active
            state.statuses = initialState.statuses
        },
        changeAvatar: (state, action: PayloadAction<number>) => {
            if (state.statuses[action.payload] === 'unlocked') {
                state.active = action.payload
            }
        },
        unlockAvatar: (state, action: PayloadAction<number>) => {
            state.statuses[action.payload] = 'unlocked'
        }
    }
});

export const { changeAvatar, resetAvatar, unlockAvatar } = avatarSlice.actions;

export const selectAvatar = (state: RootState) => state.avatar.active;
export const selectAvatarStatuses = (state: RootState) => state.avatar.statuses;

export default avatarSlice.reducer;
