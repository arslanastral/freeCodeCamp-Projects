import React from "react";
import styled from "styled-components";
import Screen from "./Screen";
import Knobs from "./Knobs";
import DrumPads from "./DrumPads";

const ControlBoardContainer = styled.div`
  display: grid;
  grid-template-areas: "screen knobs drums";
  background-color: #212021;
  height: 52%;
  border-radius: 19px 19px 0 0;
`;

const ControlBoard = ({ currentNote }) => {
  return (
    <ControlBoardContainer>
      <Screen currentNote={currentNote} />
      <Knobs />
      <DrumPads />
    </ControlBoardContainer>
  );
};

export default ControlBoard;
