import React from "react";
import UpButton from "./buttons/Up";
import DownButton from "./buttons/Down";
import styled from "styled-components";
import Tasks from "./Tasks";
import { Howl } from "howler";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementFocusTime,
  decrementFocusTime,
} from "../reducers/focusTimerSlice";
import {
  incrementBreakTime,
  decrementBreakTime,
} from "../reducers/BreakTimerSlice";

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

const TaskNameUnderline = styled.div`
  position: absolute;
  background: ${({ type }) => (type === "break" ? "#FFD12D" : "#FF2070")};
  height: 20%;
  width: ${({ type }) => (type === "break" ? "100%" : "75%")};
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

const TimerBox = ({ type }) => {
  const focusMinutes = useSelector((state) => state.focusTimer.value);
  const breakMinutes = useSelector((state) => state.breakTimer.value);
  const dispatch = useDispatch();

  const upDownButtonSound = new Howl({
    src: [
      "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/05_25%2B5-Clock/src/sounds/updown.mp3",
    ],
  });

  const handleTimerIncrement = () => {
    if (type === "focus" && focusMinutes < 60) {
      upDownButtonSound.play();
      dispatch(incrementFocusTime());
    } else if (type === "break" && breakMinutes < 40) {
      upDownButtonSound.play();
      dispatch(incrementBreakTime());
    }
  };

  const handleTimerDecrement = () => {
    if (type === "focus" && focusMinutes > 1) {
      upDownButtonSound.play();
      dispatch(decrementFocusTime());
    } else if (type === "break" && breakMinutes > 1) {
      upDownButtonSound.play();
      dispatch(decrementBreakTime());
    }
  };

  return (
    <TimerBoxContainer>
      <TaskNameContainer>
        <Tasks type={type} />
        <TaskNameUnderline type={type} />
      </TaskNameContainer>
      <Minutes>
        {type === "focus" ? focusMinutes : breakMinutes}
        <MinutesUnit>m</MinutesUnit>
      </Minutes>
      <TimerControlPanelContainer>
        <UpButton onClick={handleTimerIncrement} />
        <DownButton onClick={handleTimerDecrement} />
      </TimerControlPanelContainer>
    </TimerBoxContainer>
  );
};

export default TimerBox;
