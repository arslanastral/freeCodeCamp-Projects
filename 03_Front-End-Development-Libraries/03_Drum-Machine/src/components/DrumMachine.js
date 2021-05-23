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
    "upright-piano-knight",
    "bass-electric",
    "bassoon",
    "cello",
    "clarinet",
    "contrabass",
    "casio",
    "flute",
    "french-horn",
    "guitar-acoustic",
    "guitar-electric",
    "guitar-nylon",
    "harmonium",
    "harp",
    "organ",
    "ocarina-typical",
    "saxophone",
    "trombone",
    "trumpet",
    "tuba",
    "tubular-bells",
    "violin",
    "xylophone",
  ],
  minify: true,
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
// console.log(Tone.Midi("D#4").toMidi());
// console.log(Tone.Midi("Eb4").toMidi());

// let notess = [
//   "A0.mp3",
//   "A1.mp3",
//   "A2.mp3",
//   "A3.mp3",
//   "A4.mp3",
//   "A5.mp3",
//   "A6.mp3",
//   "A7.mp3",
//   "Ab1.mp3",
//   "Ab2.mp3",
//   "Ab3.mp3",
//   "Ab4.mp3",
//   "Ab5.mp3",
//   "Ab6.mp3",
//   "Ab7.mp3",
//   "B0.mp3",
//   "B1.mp3",
//   "B2.mp3",
//   "B3.mp3",
//   "B4.mp3",
//   "B5.mp3",
//   "B6.mp3",
//   "B7.mp3",
//   "Bb0.mp3",
//   "Bb1.mp3",
//   "Bb2.mp3",
//   "Bb3.mp3",
//   "Bb4.mp3",
//   "Bb5.mp3",
//   "Bb6.mp3",
//   "Bb7.mp3",
//   "C1.mp3",
//   "C2.mp3",
//   "C3.mp3",
//   "C4.mp3",
//   "C5.mp3",
//   "C6.mp3",
//   "C7.mp3",
//   "C8.mp3",
//   "D1.mp3",
//   "D2.mp3",
//   "D3.mp3",
//   "D4.mp3",
//   "D5.mp3",
//   "D6.mp3",
//   "D7.mp3",
//   "Db1.mp3",
// "Db2.mp3",
//   "Db3.mp3",
//   "Db4.mp3",
//   "Db5.mp3",
//   "Db6.mp3",
//   "Db7.mp3",
//   "E1.mp3",
//   "E2.mp3",
//   "E3.mp3",
//   "E4.mp3",
//   "E5.mp3",
//   "E6.mp3",
//   "E7.mp3",
//   "Eb1.mp3",
//   "Eb2.mp3",
//   "Eb3.mp3",
//   "Eb4.mp3",
//   "Eb5.mp3",
//   "Eb6.mp3",
//   "Eb7.mp3",
//   "F1.mp3",
//   "F2.mp3",
//   "F3.mp3",
//   "F4.mp3",
//   "F5.mp3",
//   "F6.mp3",
//   "F7.mp3",
//   "G1.mp3",
//   "G2.mp3",
//   "G3.mp3",
//   "G4.mp3",
//   "G5.mp3",
//   "G6.mp3",
//   "G7.mp3",
//   "Gb1.mp3",
//   "Gb2.mp3",
//   "Gb3.mp3",
//   "Gb4.mp3",
//   "Gb5.mp3",
//   "Gb6.mp3",
//   "Gb7.mp3",
// ];

// let midinotes = notess.map((ele) => Tone.Midi(ele).toMidi());
let notess = [
  "E4.mp3",
  "A4.mp3",
  "Ab4.mp3",
  "A3.mp3",
  "Bb4.mp3",
  "Db4.mp3",
  "C5.mp3",
  "C4.mp3",
  "Gb4.mp3",
  "Eb4.mp3",
];

let objj = notess.reduce((obj, ele) => {
  obj[Tone.Midi(ele).toMidi()] = ele;
  return obj;
}, {});

console.log(objj);

const distortion = new Tone.Distortion(1);
// const chorus = new Tone.Chorus();
// const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5);
// const shift = new Tone.FrequencyShifter(42);
const crusher = new Tone.BitCrusher(5);
// const cheby = new Tone.Chebyshev(20);
const pitchShift = new Tone.PitchShift();
const reverb = new Tone.Reverb(30);
const tremolo = new Tone.Tremolo(10, 0.85).start();
const vibrato = new Tone.Vibrato(10, 0.85);
const chorus = new Tone.Chorus(4, 2.5, 0.5).start();
// const autoPanner = new Tone.AutoPanner("4n");
// const autoWah = new Tone.AutoWah(50);
// var pingPong = new Tone.PingPongDelay("4n", 0.2);
// var phaser = new Tone.Phaser({
//   frequency: 15,
//   octaves: 5,
//   baseFrequency: 1000,
// });
// const reverb = new Tone.JCReverb(0.8);
let audioEffects = [
  filter,
  tremolo,
  reverb,
  distortion,
  crusher,
  pitchShift,
  vibrato,
  chorus,
  comp,
];

// console.log(audioEffects[1]);
// console.log(audioEffects[0].frequency.value);
// console.log(audioEffects[filter].frequency.value);
let Allsynths = { polysynth };
let instrument = { ...allInstrument, ...Allsynths };
export default DrumMachine;
