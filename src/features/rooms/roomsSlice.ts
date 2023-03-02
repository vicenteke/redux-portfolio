import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type RoomPossibleStates = 'notSeen' | 'seen' | 'visited'

export interface RoomsState {
    active: number;
    statuses: RoomPossibleStates[];
}

const initialState: RoomsState = {
    active: 0,    // Start on top left
    statuses: ['seen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen', 'notSeen']
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
        setActive: (state, action: PayloadAction<number>) => {
            state.active = action.payload
            if (state.statuses[action.payload] === 'notSeen') {
                state.statuses[action.payload] = 'seen'
            }
        },
        setRoomAsVisited: (state, action: PayloadAction<number>) => {
            state.statuses[action.payload] = 'visited'
        },
        setActiveRoomAsVisited: (state) => {
            state.statuses[state.active] = 'visited'
        },
        setRoomAsSeen: (state, action: PayloadAction<number>) => {
            state.statuses[action.payload] = 'seen'
        }
    }
});

export const {
    resetRooms,
    moveRight,
    moveLeft,
    moveUp,
    moveDown,
    setActiveRoomAsVisited,
    setRoomAsVisited,
    setRoomAsSeen,
    setActive
} = roomsSlice.actions;

export const selectActiveRoom = (state: RootState) => state.rooms.active;
export const selectRoomStatuses = (state: RootState) => state.rooms.statuses;

export default roomsSlice.reducer;
