import React from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import styled from "styled-components";

const DrumMachineContainer = styled.div`
  background-color: #212021;
  border-radius: 19px;
  width: 1011px;
  height: 510px;
`;

const DrumMachine = () => {
  return (
    <DrumMachineContainer>
      <ControlBoard />
      <PianoBoard />
    </DrumMachineContainer>
  );
};

export default DrumMachine;
