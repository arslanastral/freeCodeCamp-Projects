import React from "react";
import UpButton from "./buttons/Up";
import DownButton from "./buttons/Down";
import styled from "styled-components";

const TimerBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: clamp(1rem, 25vw + 1rem, 126.4px);
  height: clamp(1rem, 25vw + 1rem, 126.4px);
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 13.5%;
  position: relative;
`;

const TaskNameContainer = styled.div`
  position: relative;
  margin-left: 10px;
`;

const TaskName = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;

  font-size: clamp(5px, 1.5vw + 1rem, 21px);
  letter-spacing: -0.04em;
  color: #000000;
  position: inherit;
  z-index: 1;
  user-select: none;
`;

const TaskNameUnderline = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #ffd12d, #ffd12d), #ff2070;
  height: 20%;
  width: 100%;
  bottom: 16%;
`;

const Minutes = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(8px, 6vw + 1rem, 49px);
  letter-spacing: -0.04em;
  color: #000000;
  margin-left: 9px;
  user-select: none;
`;

const MinutesUnit = styled.span`
  font-weight: 500;
  font-size: clamp(3px, 3vw + 1rem, 35px);
`;

const TimerControlPanelContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  right: -15%;
`;

const TimerBox = ({ time, task }) => {
  return (
    <TimerBoxContainer>
      <TaskNameContainer>
        <TaskName>{task}</TaskName>
        <TaskNameUnderline />
      </TaskNameContainer>
      <Minutes>
        {time}
        <MinutesUnit>m</MinutesUnit>
      </Minutes>
      <TimerControlPanelContainer>
        <UpButton />
        <DownButton />
      </TimerControlPanelContainer>
    </TimerBoxContainer>
  );
};

export default TimerBox;
