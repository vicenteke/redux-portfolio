import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type RoomPossibleStates = 'notSeen' | 'seen' | 'visited'

export interface RoomsState {
    active: number;
    statuses: RoomPossibleStates[];
}

const initialState: RoomsState = {
    active: 6,    // Start on bottom left
    statuses: ['notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'seen', 'notSeen', 'notSeen']
};

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        resetRooms: (state) => {
            state.active = initialState.active
            state.statuses = initialState.statuses
        },
        moveRight: (state) => {
            if (state.active % 3 === 2)
                return
            
            state.active += 1;
            if (state.statuses[state.active] === 'notSeen') {
                state.statuses[state.active] = 'seen'
            }
        },
        moveLeft: (state) => {
            if (state.active % 3 === 0)
                return
            
            state.active -= 1;
            if (state.statuses[state.active] === 'notSeen') {
                state.statuses[state.active] = 'seen'
            }
        },
        moveUp: (state) => {
            if (state.active < 3)
                return
            
            state.active -= 3;
            if (state.statuses[state.active] === 'notSeen') {
                state.statuses[state.active] = 'seen'
            }
        },
        moveDown: (state) => {
            if (state.active > 5)
                return
            
            state.active += 3;
            if (state.statuses[state.active] === 'notSeen') {
                state.statuses[state.active] = 'seen'
            }
        },
        setRoomAsVisited: (state, action: PayloadAction<number>) => {
            state.statuses[action.payload] = 'visited'
        },
        setActiveRoomAsVisited: (state) => {
            state.statuses[state.active] = 'visited'
        }
    }
});

export const { resetRooms, moveRight, moveLeft, moveUp, moveDown, setActiveRoomAsVisited, setRoomAsVisited } = roomsSlice.actions;

export const selectActiveRoom = (state: RootState) => state.rooms.active;
export const selectRoomStatuses = (state: RootState) => state.rooms.statuses;

export default roomsSlice.reducer;
