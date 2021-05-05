import React from "react";
import * as Tone from "tone";
import PianoKey from "./PianoKey";
import SampleLibrary from "./ToneInstruments";
import PianoFlatKey from "./PianoFlatKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  background: #ffffff;
  display: flex;
  /* gap: 2px; */
  width: 966px;
  height: 100%;
`;
const Piano = () => {
  // let Tone = require("tone");
  // eslint-disable-next-line
  // const sampler = new Tone.Sampler({
  //   urls: {
  //     A0: "A0.mp3",
  //     C1: "C1.mp3",
  //     "D#1": "Ds1.mp3",
  //     "F#1": "Fs1.mp3",
  //     A1: "A1.mp3",
  //     C2: "C2.mp3",
  //     "D#2": "Ds2.mp3",
  //     "F#2": "Fs2.mp3",
  //     A2: "A2.mp3",
  //     C3: "C3.mp3",
  //     "D#3": "Ds3.mp3",
  //     "F#3": "Fs3.mp3",
  //     A3: "A3.mp3",
  //     C4: "C4.mp3",
  //     "D#4": "Ds4.mp3",
  //     "F#4": "Fs4.mp3",
  //     A4: "A4.mp3",
  //     C5: "C5.mp3",
  //     "D#5": "Ds5.mp3",
  //     "F#5": "Fs5.mp3",
  //     A5: "A5.mp3",
  //     C6: "C6.mp3",
  //     "D#6": "Ds6.mp3",
  //     "F#6": "Fs6.mp3",
  //     A6: "A6.mp3",
  //     C7: "C7.mp3",
  //     "D#7": "Ds7.mp3",
  //     "F#7": "Fs7.mp3",
  //     A7: "A7.mp3",
  //     C8: "C8.mp3",
  //   },
  //   release: 10,
  //   baseUrl: "https://tonejs.github.io/audio/salamander/",
  //   onload: () => {
  //     setisLoaded(true);
  //   },
  // }).toDestination();

  var piano = SampleLibrary.load({
    instruments: "piano",
    minify: true,
  });

  // const filter = new Tone.AutoFilter(5).start();
  // const distortion = new Tone.Distortion(0);
  // const reverb = new Tone.Reverb(5);
  let volume = new Tone.Volume();

  piano.release = 10;
  volume.value = 0;
  volume.mute = false;
  // piano.toDestination();
  // eslint-disable-next-line
  // piano.chain(filter, distortion, reverb, Tone.Destination);
  piano.chain(volume, Tone.Destination);

  // React.useEffect(() => {
  //   Tone.ToneAudioBuffer.loaded().then(() => {

  //   });
  // });

  // Tone.Buffer.on("load", function () {
  //   // play instrument sound

  //   piano.triggerAttack("A3");
  // });

  const playNote = (e, note) => {
    if (e.buttons == 1 || e.buttons == 3) {
      Tone.loaded().then(() => {
        piano.triggerAttack(note);
      });
    }
  };

  const release = (note) => {
    piano.triggerRelease(note);
  };

  return (
    <PianoKeyContainer>
      <PianoKey
        noteName="C3"
        onMouseEnter={(e) => playNote(e, "C3")}
        onMouseOut={() => release("C3")}
      />
      <PianoFlatKey
        noteName="C#3"
        onMouseEnter={(e) => playNote(e, "C#3")}
        onMouseOut={() => release("C#3")}
      />
      <PianoKey
        noteName="D3"
        onMouseEnter={(e) => playNote(e, "D3")}
        onMouseOut={() => release("D3")}
      />
      <PianoFlatKey
        noteName="D#3"
        onMouseEnter={(e) => playNote(e, "D#3")}
        onMouseOut={() => release("D#3")}
      />
      <PianoKey
        noteName="E3"
        onMouseEnter={(e) => playNote(e, "E3")}
        onMouseOut={() => release("E3")}
      />
      <PianoKey
        noteName="F3"
        onMouseEnter={(e) => playNote(e, "F3")}
        onMouseOut={() => release("F3")}
      />
      <PianoFlatKey
        noteName="F#3"
        onMouseEnter={(e) => playNote(e, "F#3")}
        onMouseOut={() => release("F#3")}
      />
      <PianoKey
        noteName="G3"
        onMouseEnter={(e) => playNote(e, "G3")}
        onMouseOut={() => release("G3")}
      />
      <PianoFlatKey
        noteName="G#3"
        onMouseEnter={(e) => playNote(e, "G#3")}
        onMouseOut={() => release("G#3")}
      />
      <PianoKey
        noteName="A3"
        onMouseEnter={(e) => playNote(e, "A3")}
        onMouseOut={() => release("A3")}
      />
      <PianoFlatKey
        noteName="A#3"
        onMouseEnter={(e) => playNote(e, "A#3")}
        onMouseOut={() => release("A#3")}
      />
      <PianoKey
        noteName="B3"
        onMouseEnter={(e) => playNote(e, "B3")}
        onMouseOut={() => release("B3")}
      />

      {/* Ocatve 4 */}
      <PianoKey
        noteName="C4"
        onMouseEnter={(e) => playNote(e, "C4")}
        onMouseOut={() => release("C4")}
      />
      <PianoFlatKey
        noteName="C#4"
        onMouseEnter={(e) => playNote(e, "C#4")}
        onMouseOut={() => release("C#4")}
      />
      <PianoKey
        noteName="D4"
        onMouseEnter={(e) => playNote(e, "D4")}
        onMouseOut={() => release("D4")}
      />
      <PianoFlatKey
        noteName="D#4"
        onMouseEnter={(e) => playNote(e, "D#4")}
        onMouseOut={() => release("D#4")}
      />
      <PianoKey
        noteName="E4"
        onMouseEnter={(e) => playNote(e, "E4")}
        onMouseOut={() => release("E4")}
      />
      <PianoKey
        noteName="F4"
        onMouseEnter={(e) => playNote(e, "F4")}
        onMouseOut={() => release("F4")}
      />
      <PianoFlatKey
        noteName="F#4"
        onMouseEnter={(e) => playNote(e, "F#4")}
        onMouseOut={() => release("F#4")}
      />
      <PianoKey
        noteName="G4"
        onMouseEnter={(e) => playNote(e, "G4")}
        onMouseOut={() => release("G4")}
      />
      <PianoFlatKey
        noteName="G#4"
        onMouseEnter={(e) => playNote(e, "G#4")}
        onMouseOut={() => release("G#4")}
      />
      <PianoKey
        noteName="A4"
        onMouseEnter={(e) => playNote(e, "A4")}
        onMouseOut={() => release("A4")}
      />
      <PianoFlatKey
        noteName="A#4"
        onMouseEnter={(e) => playNote(e, "A#4")}
        onMouseOut={() => release("A#4")}
      />
      <PianoKey
        noteName="B4"
        onMouseEnter={(e) => playNote(e, "B4")}
        onMouseOut={() => release("B4")}
      />

      {/* ocatve 5 */}
      <PianoKey
        noteName="C5"
        onMouseEnter={(e) => playNote(e, "C5")}
        onMouseOut={() => release("C5")}
      />
      <PianoFlatKey
        noteName="C#5"
        onMouseEnter={(e) => playNote(e, "C#5")}
        onMouseOut={() => release("C#5")}
      />
      <PianoKey
        noteName="D5"
        onMouseEnter={(e) => playNote(e, "D5")}
        onMouseOut={() => release("D5")}
      />
      <PianoFlatKey
        noteName="D#5"
        onMouseEnter={(e) => playNote(e, "D#5")}
        onMouseOut={() => release("D#5")}
      />
      <PianoKey
        noteName="E5"
        onMouseEnter={(e) => playNote(e, "E5")}
        onMouseOut={() => release("E5")}
      />
      <PianoKey
        noteName="F5"
        onMouseEnter={(e) => playNote(e, "F5")}
        onMouseOut={() => release("F5")}
      />
      <PianoFlatKey
        noteName="F#5"
        onMouseEnter={(e) => playNote(e, "F#5")}
        onMouseOut={() => release("F#5")}
      />
      <PianoKey
        noteName="G5"
        onMouseEnter={(e) => playNote(e, "G5")}
        onMouseOut={() => release("G5")}
      />
      <PianoFlatKey
        noteName="G#5"
        onMouseEnter={(e) => playNote(e, "G#5")}
        onMouseOut={() => release("G#5")}
      />
      <PianoKey
        noteName="A5"
        onMouseEnter={(e) => playNote(e, "A5")}
        onMouseOut={() => release("A5")}
      />
      <PianoFlatKey
        noteName="A#5"
        onMouseEnter={(e) => playNote(e, "A#5")}
        onMouseOut={() => release("A#5")}
      />
      <PianoKey
        noteName="B5"
        onMouseEnter={(e) => playNote(e, "B5")}
        onMouseOut={() => release("B5")}
      />
    </PianoKeyContainer>
  );
};

export default Piano;
