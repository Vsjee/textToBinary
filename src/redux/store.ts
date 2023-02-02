import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HistoryState, TextState } from '../models';
import { historySlice } from './state/history';
import { textSlice } from './state/text';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface AppState {
  text: TextState;
  history: HistoryState;
}

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  text: textSlice.reducer,
  history: historySlice.reducer,
});

export const store = persistReducer(persistConfig, rootReducer);

export const MY__STORE = configureStore({
  reducer: store,
});
