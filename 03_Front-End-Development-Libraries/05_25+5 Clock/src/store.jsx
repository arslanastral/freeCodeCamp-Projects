import { configureStore } from "@reduxjs/toolkit";
import focusTimerReducer from "./reducers/focusTimerSlice";
import BreakTimerReducer from "./reducers/BreakTimerSlice";
import clockReducer from "./reducers/clockSlice";

export default configureStore({
  reducer: {
    focusTimer: focusTimerReducer,
    breakTimer: BreakTimerReducer,
    clock: clockReducer,
  },
});
