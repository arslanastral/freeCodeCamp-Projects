import { createSlice } from "@reduxjs/toolkit";

export const breakTimerSlice = createSlice({
  name: "breakTimer",
  initialState: {
    value: 2,
  },
  reducers: {
    incrementBreakTime: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrementBreakTime: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementBreakTime,
  decrementBreakTime,
} = breakTimerSlice.actions;

export default breakTimerSlice.reducer;
