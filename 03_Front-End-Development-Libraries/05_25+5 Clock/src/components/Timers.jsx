import React from "react";
import TimerBox from "./TimerBox";
import styled from "styled-components";

const TimersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin: 0 25px 0 25px; */
`;

const Seperator = styled.div`
  width: 15%;
  height: 0;
  border: 1px solid rgba(255, 255, 255, 0.26);
  transform: rotate(90deg);
`;

const Timers = () => {
  return (
    <TimersContainer>
      <TimerBox type="focus" />
      <Seperator />
      <TimerBox type="break" />
    </TimersContainer>
  );
};

export default Timers;
