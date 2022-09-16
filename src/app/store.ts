import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import coinsReducer from '../features/coins/coinsSlice';
import roomsReducer from '../features/rooms/roomsSlice';
import avatarReducer from '../features/avatar/avatarSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    coins: coinsReducer,
    rooms: roomsReducer,
    avatar: avatarReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
