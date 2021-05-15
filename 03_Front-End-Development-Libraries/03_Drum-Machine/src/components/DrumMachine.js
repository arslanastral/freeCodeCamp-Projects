// /* eslint-disable */
import React, { useState } from "react";
import ControlBoard from "./ControlBoard";
import PianoBoard from "./PianoBoard";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import SampleLibrary from "./Tonejs-Instruments";
import * as Tone from "tone";
import styled, { css, keyframes } from "styled-components";

const fadein = keyframes`
 from { opacity: 0.4; }
    to   { opacity: 1; }
`;

const prefadein = keyframes`
 from { opacity: 0; }
    to   { opacity: 0.4; }
`;

const DrumMachineContainer = styled.div`
  border-radius: 19px;
  width: 1011px;
  height: 510px;

  ${(props) =>
    !props.isloaded
      ? css`
          opacity: 0.4;
          animation: ${prefadein} 1s;
          pointer-events: none;
        `
      : css`
          animation: ${fadein} 1s;
        `}

  @media (max-width: 830px) {
    transform: scale(0.8);
  }

  @media (max-width: 750px) {
    transform: scale(0.7);
  }

  @media (max-width: 650px) {
    transform: scale(0.65);
  }

  @media (max-width: 580px) {
    transform: scale(0.58);
  }
`;

const DrumMachine = () => {
  React.useEffect(() => {
    NProgress.start();
    NProgress.set(0.8);
  });
  return (
    <DrumMachineProvider>
      <DrumMachineBox />
    </DrumMachineProvider>
  );
};

// eslint-disable-next-line react/display-name
const DrumMachineBox = React.memo(() => {
  const { machineLoaded } = React.useContext(DrumMachineContext);
  return (
    <DrumMachineContainer isloaded={machineLoaded}>
      <ControlBoard />
      <PianoBoard />
    </DrumMachineContainer>
  );
});

export const DrumMachineContext = React.createContext();

function DrumMachineProvider({ children }) {
  const [currentNote, setCurrentNote] = useState("...");
  const [soundRelease, setrelease] = useState(50);
  const [masterVolume, setmasterVolume] = useState(0);
  const [currentInstrument, setcurrentInstrument] = useState("piano");
  const [octave, setOctave] = useState([3, 4, 5]);
  const [machineLoaded, setmachineLoaded] = useState(false);

  Tone.loaded().then(() => {
    NProgress.done();
    setmachineLoaded(true);
  });

  return (
    <DrumMachineContext.Provider
      value={{
        currentNote,
        setCurrentNote,
        machineLoaded,
        setmachineLoaded,
        soundRelease,
        setrelease,
        masterVolume,
        setmasterVolume,
        currentInstrument,
        setcurrentInstrument,
        instrument,
        audioEffects,
        octave,
        setOctave,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
}

var allInstrument = SampleLibrary.load({
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
});

const polysynth = new Tone.PolySynth();
polysynth.set({ detune: -1200 });
// const filter = new Tone.AutoFilter(8).start();
// const distortion = new Tone.Distortion(1);
// const reverb = new Tone.Reverb(3);
// const autoPanner = new Tone.AutoPanner("4n");
let audioEffects = [];
let Allsynths = { polysynth };
let instrument = { ...allInstrument, ...Allsynths };

export default DrumMachine;
