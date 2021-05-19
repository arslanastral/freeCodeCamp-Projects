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

  let piano = instrument[currentInstrument];

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
        piano,
        drumpadsounds,
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

const boom = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/boom.wav"
).toDestination();

const openhat = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/openhat.wav"
).toDestination();

const snare = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/snare.wav"
).toDestination();

const kick = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/kick.wav"
).toDestination();

const hihat = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/hihat.wav"
).toDestination();

const clap = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/clap.wav"
).toDestination();

const ride = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/ride.wav"
).toDestination();

const tom = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/tom.wav"
).toDestination();

const tink = new Tone.Player(
  "https://arslanastral.github.io/freeCodeCamp-Projects/03_Front-End-Development-Libraries/03_Drum-Machine/audio-samples/drum-samples/drumkit/tink.wav"
).toDestination();

let drumpadsounds = [boom, openhat, snare, kick, hihat, clap, ride, tom, tink];

const polysynth = new Tone.PolySynth();
polysynth.set({ polyphony: 128 });
polysynth.set({
  envelope: {
    attack: 0.05,
    decay: 0.2,
    sustain: 0.8,
    release: 5,
  },
});

// const duoSynth = new Tone.DuoSynth();
// duoSynth.set({ detune: -1200 });

const filter = new Tone.AutoFilter(4).start();
const comp = new Tone.Compressor(-30, 3);

// const distortion = new Tone.Distortion(1);
// const chorus = new Tone.Chorus();
// const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5);
// const shift = new Tone.FrequencyShifter(42);
// const crusher = new Tone.BitCrusher(5);
// const cheby = new Tone.Chebyshev(20);
// const pitchShift = new Tone.PitchShift();
// const reverb = new Tone.Reverb(0.8);
const tremolo = new Tone.Tremolo(10, 0.85).start();
// const vibrato = new Tone.Vibrato(10, 0.75);
// const autoPanner = new Tone.AutoPanner("4n");
// const autoWah = new Tone.AutoWah(50);
// var pingPong = new Tone.PingPongDelay("4n", 0.2);
// var phaser = new Tone.Phaser({
//   frequency: 15,
//   octaves: 5,
//   baseFrequency: 1000,
// });
// const reverb = new Tone.JCReverb(0.8);
let audioEffects = [filter, tremolo, comp];

// console.log(audioEffects[1]);
// console.log(audioEffects[0].frequency.value);
// console.log(audioEffects[filter].frequency.value);
let Allsynths = { polysynth };
let instrument = { ...allInstrument, ...Allsynths };
export default DrumMachine;
