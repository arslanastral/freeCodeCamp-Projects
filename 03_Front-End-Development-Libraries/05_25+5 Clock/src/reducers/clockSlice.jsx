import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
  name: "clock",
  initialState: {
    currentTime: "",
    isRunning: false,
    isBreakTime: false,
  },
  reducers: {
    setClockRuning: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isRunning = true;
    },
    setClockStopped: (state) => {
      state.isRunning = false;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setBreakStarted: (state) => {
      state.isBreakTime = true;
    },
    setBreakFinished: (state) => {
      state.isBreakTime = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setClockRuning,
  setClockStopped,
  setCurrentTime,
  setBreakStarted,
  setBreakFinished,
} = clockSlice.actions;

export default clockSlice.reducer;
