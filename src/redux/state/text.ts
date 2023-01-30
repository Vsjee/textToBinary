import { createSlice } from '@reduxjs/toolkit';
import { TextState } from '../../models';

const textInitalState: TextState = { text: '' };

export const textSlice = createSlice({
  name: 'text',
  initialState: textInitalState,
  reducers: {
    updateText: (state, actions) => {
      state.text = actions.payload.text;
    },
  },
});

export const { updateText } = textSlice.actions;
