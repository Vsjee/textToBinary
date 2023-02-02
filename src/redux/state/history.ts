import { createSlice } from '@reduxjs/toolkit';
import { HistoryInfo, HistoryState } from '../../models';
import { setLocalStorage } from '../../utilities';

const historyInitalState: HistoryState = {
  history: [],
};

export const historyKey = 'history';

export const historySlice = createSlice({
  name: 'history',
  initialState:
    localStorage.getItem(historyKey) !== null
      ? { history: JSON.parse(localStorage.getItem(historyKey) as string) }
      : historyInitalState,
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
    removeHistoryItem: (state, actions) => {
      return {
        ...state,
        history: [
          ...state.history.filter(
            (item: HistoryInfo) => item.inputText !== actions.payload.inputText
          ),
        ],
      };
    },
  },
});

export const { addHistoryItem, removeHistoryItem } = historySlice.actions;
