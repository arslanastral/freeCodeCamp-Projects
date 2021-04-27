import React from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import styled from "styled-components";

const DrumMachineContainer = styled.div`
  width: 1011px;
  height: 490px;
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
