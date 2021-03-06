import { createSlice } from "@reduxjs/toolkit";

export const focusTimerSlice = createSlice({
  name: "focusTimer",
  initialState: {
    value: 25,
  },
  reducers: {
    incrementFocusTime: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrementFocusTime: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementFocusTime,
  decrementFocusTime,
} = focusTimerSlice.actions;

export default focusTimerSlice.reducer;
