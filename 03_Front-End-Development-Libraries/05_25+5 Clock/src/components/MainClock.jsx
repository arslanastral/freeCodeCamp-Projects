import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const MainClockContainer = styled.div`
  /* width: 100%; */
  /* background: yellow; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Clock = styled.div`
  position: relative;
`;

const ClockTime = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(1rem, 30vw, 10rem);
  letter-spacing: -0.045em;
  margin-top: -10%;
  color: #ffffff;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: inherit;
  z-index: 1;
  user-select: none;
  animation: fadeIn 0.5s;
`;

const ClockUnderline = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #ffd12d, #ffd12d), #ff2070;
  height: 10%;
  width: 100%;
  bottom: 25%;
`;

const MainClock = () => {
  const currentTime = useSelector((state) => state.clock.currentTime);

  return (
    <MainClockContainer>
      <Clock>
        <ClockTime>{currentTime}</ClockTime>
        <ClockUnderline />
      </Clock>
    </MainClockContainer>
  );
};

export default MainClock;
