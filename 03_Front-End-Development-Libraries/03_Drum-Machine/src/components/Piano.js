/* eslint-disable */
import React, { useRef, useEffect } from "react";
import { DrumMachineContext } from "./DrumMachine";
import * as Tone from "tone";
import PianoKey from "./PianoKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  background: #ffffff;
  display: flex;
  width: 966px;
  height: 100%;
`;

// const tremolo = new Tone.Tremolo(5, 0.55).start();
// const phaser = new Tone.Phaser({
//   frequency: 15,
//   octaves: 5,
//   baseFrequency: 1000,
// });

// piano.sustain = 100;

// volume.mute = false;
// piano.toDestination();
// eslint-disable-next-line
// const autoPanner = new Tone.AutoPanner("16n").toDestination().start();

// const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
// const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
// const pitchShift = new Tone.PitchShift(10);
// piano.chain(volume, Tone.Destination);

// React.useEffect(() => {
//   Tone.ToneAudioBuffer.loaded().then(() => {

//   });
// });

// Tone.Buffer.on("load", function () {
//   // play instrument sound

//   piano.triggerAttack("A3");
// });

const Piano = () => {
  const {
    setCurrentNote,
    soundRelease,
    masterVolume,
    instrument,
    volume,
    currentInstrument,
    distortion,
  } = React.useContext(DrumMachineContext);

  let piano = instrument[currentInstrument];

  React.useEffect(() => {
    piano.release = soundRelease;
    piano.volume.value = masterVolume;
    piano.toDestination();
    Tone.Destination.mute = false;
  }, [soundRelease, masterVolume, currentInstrument]);

  const playNote = (e, note) => {
    if (e.buttons == 1 || e.buttons == 3) {
      setCurrentNote(note);
      Tone.loaded().then(() => {
        piano.triggerAttack(note);
      });
    }
  };

  const release = (note) => {
    piano.triggerRelease(note);
  };

  let NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  return (
    <PianoKeyContainer>
      {NOTES.map((note) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}3`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
          />
        ) : (
          <PianoKey
            noteName={`${note}3`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
          />
        )
      )}

      {NOTES.map((note) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}4`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
          />
        ) : (
          <PianoKey
            noteName={`${note}4`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
          />
        )
      )}

      {NOTES.map((note) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}5`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
          />
        ) : (
          <PianoKey
            noteName={`${note}5`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
          />
        )
      )}
    </PianoKeyContainer>
  );
};

export default Piano;
