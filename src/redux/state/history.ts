import { createSlice } from '@reduxjs/toolkit';
import { HistoryInfo, HistoryState } from '../../models';

const historyInitalState: HistoryState = { history: [] };

export const historyKey = 'history';

export const historySlice = createSlice({
  name: 'history',
  initialState:
    localStorage.getItem(historyKey) !== null
      ? JSON.parse(localStorage.getItem(historyKey) as string)
      : historyInitalState,
  reducers: {
    addHistoryItem: (state, actions) => {
      let historyItem: HistoryInfo = {
        inputText: actions.payload.inputText,
        outputText: actions.payload.outputText,
      };
      state.history.push(historyItem);
    },
  },
});

export const { addHistoryItem } = historySlice.actions;
