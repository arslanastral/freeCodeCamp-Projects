/* eslint-disable */
import React, { useState } from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import styled from "styled-components";

const DrumMachineContainer = styled.div`
  border-radius: 19px;
  width: 1011px;
  height: 510px;
`;

const DrumMachine = () => {
  return (
    <DrumMachineProvider>
      <DrumMachineBox />
    </DrumMachineProvider>
  );
};

const DrumMachineBox = React.memo(() => {
  return (
    <DrumMachineContainer>
      <ControlBoard />
      <PianoBoard />
    </DrumMachineContainer>
  );
});

export const DrumMachineContext = React.createContext();

function DrumMachineProvider({ children }) {
  const [currentNote, setCurrentNote] = useState("...");
  const [soundRelease, setrelease] = useState(20);
  const [masterVolume, setmasterVolume] = useState(0);

  return (
    <DrumMachineContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        soundRelease,
        setrelease,
        masterVolume,
        setmasterVolume,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
}

export default DrumMachine;
