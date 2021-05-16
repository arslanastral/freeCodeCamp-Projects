import React from "react";
import styled from "styled-components";
import Screen from "./Screen";
import Knobs from "./Knobs";
import DrumPads from "./DrumPads";

const ControlBoardContainer = styled.div`
  display: flex;
  /* background-color: #212021; */
  background-color: rgb(22, 23, 23);
  height: 52%;
  border-radius: 19px 19px 0 0;
`;

const ControlBoard = () => {
  return (
    <ControlBoardContainer>
      <Screen />
      <Knobs />
      <DrumPads />
    </ControlBoardContainer>
  );
};

export default ControlBoard;
