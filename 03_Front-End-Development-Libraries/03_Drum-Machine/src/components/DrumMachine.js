import React from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import styled from "styled-components";

const DrumMachineContainer = styled.div`
  border-radius: 19px;
  width: 1011px;
  height: 510px;
`;

const DrumMachine = () => {
  const [currentNote, setcurrentNote] = React.useState("...");

  return (
    <DrumMachineContainer>
      <ControlBoard currentNote={currentNote} />
      <PianoBoard setcurrentNote={setcurrentNote} />
    </DrumMachineContainer>
  );
};

export default DrumMachine;
