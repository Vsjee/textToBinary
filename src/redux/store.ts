import { configureStore } from '@reduxjs/toolkit';
import { HistoryState, TextState } from '../models';
import { historySlice } from './state/history';
import { textSlice } from './state/text';

export interface AppState {
  text: TextState;
  history: HistoryState;
}

export const MY__STORE = configureStore({
  reducer: {
    text: textSlice.reducer,
    history: historySlice.reducer,
  },
});
