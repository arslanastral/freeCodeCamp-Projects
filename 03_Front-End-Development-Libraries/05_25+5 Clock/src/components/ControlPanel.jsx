import React from "react";
import styled from "styled-components";
import Start from "./buttons/Start";
import Reset from "./buttons/Reset";
import Settings from "./buttons/Settings";
import { useSelector, useDispatch } from "react-redux";
import {
  setClockRuning,
  setClockStopped,
  setCurrentTime,
  setBreakStarted,
  setBreakFinished,
} from "../reducers/clockSlice";

const ControlPanelWrapper = styled.div`
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 202px;
  height: 46px;
  background: #ffffff;
  border-radius: 47px;
`;

const ControlPanel = () => {
  const clock = useSelector((state) => state.clock);
  const focusMinutes = useSelector((state) => state.focusTimer.value);
  const breakMinutes = useSelector((state) => state.breakTimer.value);
  const dispatch = useDispatch();

  let timer = 60 * focusMinutes;
  let breakTime = 60 * breakMinutes;
  let countDownInterval = React.useRef(null);

  const handleTimerStart = () => {
    console.log(clock.isBreakTime, clock);

    if (!clock.isRunning) {
      dispatch(setClockRuning());

      let start = Date.now(),
        diff,
        minutes,
        seconds;
      // let countdown;
      const countdownTimer = () => {
        console.log("timer:", timer, "breaktimer:", breakTime);
        diff = timer - (((Date.now() - start) / 100) | 0);
        minutes = (diff / 60) | 0;
        seconds = diff % 60 | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (clock.isBreakTime) {
          document.title = `Break Time! 👉 ${minutes}:${seconds}`;
          console.log(`Break Time! 👉 ${minutes}:${seconds}`);
        } else if (!clock.isBreakTime) {
          document.title = `Focus! 💪 ${minutes}:${seconds}`;
          console.log(`Focus! 💪 ${minutes}:${seconds}`);
        }
        dispatch(setCurrentTime(`${minutes}:${seconds}`));

        // console.log(`${minutes}:${seconds}`);

        // --timer;

        if (diff <= 0 && !clock.isBreakTime) {
          dispatch(setBreakStarted());
          start = Date.now();
          timer = breakTime;
        } else if (diff <= 0) {
          dispatch(setClockStopped());
          dispatch(setBreakFinished());
          clearInterval(countDownInterval.current);
        }

        // if (timer - 1 < 0 && clock.isBreakTime) {
        //   dispatch(setClockStopped());
        //   // clearInterval(countdown);
        // } else if (timer - 1 < 0 && !clock.isBreakTime) {
        //   dispatch(setBreakTime());
        //   timer += breakTime;
        //   console.log("break session started");
        // }
      };

      countdownTimer();
      countDownInterval.current = setInterval(countdownTimer, 10);
    } else if (clock.isRunning) {
      dispatch(setClockStopped());
      dispatch(setBreakFinished());
      clearInterval(countDownInterval.current);
    }
  };

  return (
    <ControlPanelWrapper>
      <ControlPanelContainer>
        <Start onClick={handleTimerStart} isClockRunning={clock.isRunning} />
        <Reset />
        <Settings />
      </ControlPanelContainer>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
