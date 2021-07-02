import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const MainClockContainer = styled.div`
  /* width: 100%; */
  /* background: yellow; */
  display: flex;
  /* align-items: flex-end;
  justify-content: center; */
  position: relative;
`;

const ClockTime = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(1rem, 30vw, 10rem);
  letter-spacing: -0.045em;
  /* margin-top: -10%; */
  color: #ffffff;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: inherit;
  z-index: 1;
  user-select: none;
  margin: 0 auto;
  animation: ${({ clockRunning }) => (clockRunning ? "pulse 1s infinite" : "")};
`;

const ClockUnderline = styled.div`
  position: absolute;
  background: ${({ isBreakTime }) => (isBreakTime ? "#ffd12d" : "#ff2070")};
  height: 15%;
  width: 90%;
  border-radius: 20px;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ease-out 1s;
  /*  */
`;

const MainClock = () => {
  const focusMinutes = useSelector((state) => state.focusTimer.value);
  const currentTime = useSelector((state) => state.clock.currentTime);
  const clockRunning = useSelector((state) => state.clock.isRunning);
  const isBreakTime = useSelector((state) => state.clock.isBreakStarted);

  return (
    <MainClockContainer>
      <ClockTime clockRunning={clockRunning}>
        {clockRunning && currentTime
          ? currentTime
          : `${focusMinutes < 10 ? "0" + focusMinutes : focusMinutes}:00`}
      </ClockTime>
      <ClockUnderline isBreakTime={isBreakTime} />
    </MainClockContainer>
  );
};

export default MainClock;
