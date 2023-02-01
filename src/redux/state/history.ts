import { createSlice } from '@reduxjs/toolkit';
import { HistoryInfo, HistoryState } from '../../models';
import { setLocalStorage } from '../../utilities';

const historyInitalState: HistoryState = {
  history: [],
};

export const historyKey = 'history';

export const historySlice = createSlice({
  name: 'history',
  initialState: historyInitalState,
  reducers: {
    addHistoryItem: (state, actions) => {
      let historyItem: HistoryInfo = {
        inputText: actions.payload.inputText,
        outputText: actions.payload.outputText,
      };
      setLocalStorage(historyKey, state.history);

      return {
        ...state,
        history: [...state.history, historyItem],
      };
    },
  },
});

export const { addHistoryItem } = historySlice.actions;
