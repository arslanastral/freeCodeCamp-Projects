/* eslint-disable */
import React, { useState } from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import SampleLibrary from "./Tonejs-Instruments";
import * as Tone from "tone";
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
  const [currentInstrument, setcurrentInstrument] = useState("piano");

  return (
    <DrumMachineContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        soundRelease,
        setrelease,
        volume,
        masterVolume,
        setmasterVolume,
        currentInstrument,
        setcurrentInstrument,
        instrument,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
}

var instrument = SampleLibrary.load({
  instruments: [
    "piano",
    "bass-electric",
    "bassoon",
    "cello",
    "clarinet",
    "contrabass",
    "casio",
    "flute",
    "female-voice-aa",
    "female-voice-oo",
    "females-voice-aa",
    "females-voice-oo",
    "french-horn",
    "guitar-acoustic",
    "guitar-electric",
    "guitar-nylon",
    "harmonium",
    "harp",
    "organ",
    "saxophone",
    "trombone",
    "trumpet",
    "tuba",
    "violin",
    "xylophone",
  ],
  minify: true,
});

// const filter = new Tone.AutoFilter(0).start();
// const distortion = new Tone.Distortion(3);
// const reverb = new Tone.Reverb(20);
let volume = new Tone.Volume();

export default DrumMachine;
