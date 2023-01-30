import { createSlice } from '@reduxjs/toolkit';
import { HistoryState } from '../../models';

const historyInitalState: HistoryState = { history: [] };

export const historySlice = createSlice({
  name: 'history',
  initialState: historyInitalState,
  reducers: {},
});
