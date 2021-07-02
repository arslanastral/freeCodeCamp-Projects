import React from "react";
import styled from "styled-components";
import MainClock from "./MainClock";
import Timers from "./Timers";
import Stats from "./Stats";
import ControlPanel from "./ControlPanel";

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: min(34rem, 90vw);
  height: max(45rem, 90vh);
  background: linear-gradient(
    180deg,
    rgba(22, 46, 252, 0.8) 4.69%,
    rgba(250, 255, 0, 0) 100%
  );
  border-radius: 60px;
  animation: fadeIn 0.5s;
`;

const ClockBoard = () => {
  return (
    <ClockContainer>
      <MainClock />
      <Timers />
      <Stats />
      <ControlPanel />
    </ClockContainer>
  );
};

export default ClockBoard;
