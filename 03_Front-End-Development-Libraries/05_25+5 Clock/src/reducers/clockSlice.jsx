import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
  name: "clock",
  initialState: {
    currentTime: "",
    isRunning: false,
    isBreakStarted: false,
  },
  reducers: {
    setClockRuning: (state) => {
      state.isRunning = true;
    },
    setClockStopped: (state) => {
      state.isRunning = false;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setBreakStarted: (state) => {
      state.isBreakStarted = true;
    },
    setBreakFinished: (state) => {
      state.isBreakStarted = false;
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
