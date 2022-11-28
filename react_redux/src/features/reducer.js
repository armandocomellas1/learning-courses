import { createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log('increment', state.value);
    },
  },
});

export const { increment } = reducerSlice.actions;
export default reducerSlice.reducer;
