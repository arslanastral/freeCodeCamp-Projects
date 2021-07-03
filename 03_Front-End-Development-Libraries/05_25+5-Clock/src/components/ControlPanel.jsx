import React from "react";
import styled from "styled-components";
import Start from "./buttons/Start";
import Reset from "./buttons/Reset";
import Settings from "./buttons/Settings";
import { Howl } from "howler";
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
  const isRunning = useSelector((state) => state.clock.isRunning);
  const isBreakStarted = useSelector((state) => state.clock.isBreakStarted);
  const focusMinutes = useSelector((state) => state.focusTimer.value);
  const breakMinutes = useSelector((state) => state.breakTimer.value);

  const dispatch = useDispatch();

  const startTimerSound = new Howl({
    src: [
      "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/play.mp3",
    ],
  });

  const stopTimerSound = new Howl({
    src: [
      "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/stop.mp3",
    ],
  });

  // const resetTimerSound = new Howl({
  //   src: ["https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/reset.mp3"],
  // });

  const breakStartedSound = new Howl({
    src: [
      "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/breakstarted.mp3",
    ],
  });

  const breakFinishedSound = new Howl({
    src: [
      "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/breakfinished.mp3",
    ],
  });

  let timer = 60 * focusMinutes;
  let breakTime = 60 * breakMinutes;
  let countDownInterval = React.useRef(null);

  const handleTimerStart = () => {
    if (!isRunning) {
      startTimerSound.play();
      dispatch(setClockRuning());
      let breakStarted = false;
      let start = Date.now(),
        diff,
        minutes,
        seconds;

      const countdown = () => {
        diff = timer - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = diff % 60 | 0;

        console.log(`${minutes}:${seconds}`);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (breakStarted) {
          document.title = `Break Time! 👉 ${minutes}:${seconds}`;
        } else {
          document.title = `Focus! 💪 ${minutes}:${seconds}`;
        }

        dispatch(setCurrentTime(`${minutes}:${seconds}`));

        if (breakStarted && diff <= 0) {
          breakFinishedSound.play();
          dispatch(setBreakFinished());
          dispatch(setClockStopped());
          clearInterval(countDownInterval.current);
          document.title = "Session Finished! 🎉";
        } else if (!breakStarted && diff <= 0) {
          breakStartedSound.play();
          breakStarted = true;
          dispatch(setBreakStarted());
          start = Date.now();
          timer = breakTime;
          console.log(isBreakStarted);
        }
      };

      countdown();
      countDownInterval.current = setInterval(countdown, 1);
    } else if (isRunning) {
      stopTimerSound.play();
      dispatch(setClockStopped());
      dispatch(setBreakFinished());
      document.title = "Stopped!";
      clearInterval(countDownInterval.current);
    }
  };

  return (
    <ControlPanelWrapper>
      <ControlPanelContainer>
        <Start onClick={handleTimerStart} isClockRunning={isRunning} />
        <Reset />
        <Settings />
      </ControlPanelContainer>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
