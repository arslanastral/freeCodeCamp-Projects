/* eslint-disable no-unused-vars */
import React from "react";
import { DrumMachineContext } from "./DrumMachine";

import * as Tone from "tone";
import PianoKey from "./PianoKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  background: #ffffff;
  display: flex;
  width: 95.5%;
  height: 100%;
`;

const Piano = () => {
  const {
    setCurrentNote,
    // soundRelease,
    // masterVolume,
    piano,
    // currentInstrument,
    audioEffects,
    octave,
    isRecording,
    recordedNote,
    setrecordedNote,
  } = React.useContext(DrumMachineContext);

  // console.log(piano);

  React.useEffect(() => {
    // piano.release = soundRelease;
    // piano.volume.value = masterVolume;
    piano.chain(...audioEffects, Tone.Destination);
    Tone.Destination.mute = false;
  }, [audioEffects, piano]);

  const playNote = (note) => {
    // setCurrentNote(note);
    Tone.loaded().then(() => {
      if (isRecording) {
        // setrecordedNote([...recordedNote, [Tone.now().toFixed(3), note]]);
        setrecordedNote([...recordedNote, note]);
      }

      piano.triggerAttack(Tone.Frequency(note));
    });
  };

  const MAJOR_CHORD_MAP = {
    [`C${octave[0]}`]: [
      Tone.Frequency(`C${octave[0]}`),
      Tone.Frequency(`E${octave[0]}`),
      Tone.Frequency(`G${octave[0]}`),
    ],
    [`C#${octave[0]}`]: [
      Tone.Frequency(`C#${octave[0]}`),
      Tone.Frequency(`F${octave[0]}`),
      Tone.Frequency(`G#${octave[0]}`),
    ],
    [`D${octave[0]}`]: [
      Tone.Frequency(`D${octave[0]}`),
      Tone.Frequency(`F#${octave[0]}`),
      Tone.Frequency(`A${octave[0]}`),
    ],
    [`D#${octave[0]}`]: [
      Tone.Frequency(`D#${octave[0]}`),
      Tone.Frequency(`G${octave[0]}`),
      Tone.Frequency(`A#${octave[0]}`),
    ],
    [`E${octave[0]}`]: [
      Tone.Frequency(`E${octave[0]}`),
      Tone.Frequency(`G#${octave[0]}`),
      Tone.Frequency(`B${octave[0]}`),
    ],
    [`F${octave[0]}`]: [
      Tone.Frequency(`F${octave[0]}`),
      Tone.Frequency(`A${octave[0]}`),
      Tone.Frequency(`C${octave[1]}`),
    ],
    [`F#${octave[0]}`]: [
      Tone.Frequency(`F#${octave[0]}`),
      Tone.Frequency(`A#${octave[0]}`),
      Tone.Frequency(`C#${octave[1]}`),
    ],
    [`G${octave[0]}`]: [
      Tone.Frequency(`G${octave[0]}`),
      Tone.Frequency(`B${octave[0]}`),
      Tone.Frequency(`D${octave[1]}`),
    ],
    [`G#${octave[0]}`]: [
      Tone.Frequency(`G#${octave[0]}`),
      Tone.Frequency(`C${octave[1]}`),
      Tone.Frequency(`D#${octave[1]}`),
    ],
    [`A${octave[0]}`]: [
      Tone.Frequency(`A${octave[0]}`),
      Tone.Frequency(`C#${octave[1]}`),
      Tone.Frequency(`E${octave[1]}`),
    ],
    [`A#${octave[0]}`]: [
      Tone.Frequency(`A#${octave[0]}`),
      Tone.Frequency(`D${octave[1]}`),
      Tone.Frequency(`F${octave[1]}`),
    ],
    [`B${octave[0]}`]: [
      Tone.Frequency(`B${octave[0]}`),
      Tone.Frequency(`D#${octave[1]}`),
      Tone.Frequency(`F#${octave[1]}`),
    ],
  };

  const MINOR_CHORD_MAP = {
    [`C${octave[1]}`]: [
      Tone.Frequency(`C${octave[1]}`),
      Tone.Frequency(`D#${octave[1]}`),
      Tone.Frequency(`G${octave[1]}`),
    ],
    [`C#${octave[1]}`]: [
      Tone.Frequency(`C#${octave[1]}`),
      Tone.Frequency(`E${octave[1]}`),
      Tone.Frequency(`G#${octave[1]}`),
    ],
    [`D${octave[1]}`]: [
      Tone.Frequency(`D${octave[1]}`),
      Tone.Frequency(`F${octave[1]}`),
      Tone.Frequency(`A${octave[1]}`),
    ],
    [`D#${octave[1]}`]: [
      Tone.Frequency(`D#${octave[1]}`),
      Tone.Frequency(`F#${octave[1]}`),
      Tone.Frequency(`A#${octave[1]}`),
    ],
    [`E${octave[1]}`]: [
      Tone.Frequency(`E${octave[1]}`),
      Tone.Frequency(`G${octave[1]}`),
      Tone.Frequency(`B${octave[1]}`),
    ],
    [`F${octave[1]}`]: [
      Tone.Frequency(`F${octave[1]}`),
      Tone.Frequency(`G#${octave[1]}`),
      Tone.Frequency(`C${octave[2]}`),
    ],
    [`F#${octave[1]}`]: [
      Tone.Frequency(`F#${octave[1]}`),
      Tone.Frequency(`A${octave[1]}`),
      Tone.Frequency(`C#${octave[2]}`),
    ],
    [`G${octave[1]}`]: [
      Tone.Frequency(`G${octave[1]}`),
      Tone.Frequency(`A#${octave[1]}`),
      Tone.Frequency(`D${octave[2]}`),
    ],
    [`G#${octave[1]}`]: [
      Tone.Frequency(`G#${octave[1]}`),
      Tone.Frequency(`B${octave[1]}`),
      Tone.Frequency(`D#${octave[2]}`),
    ],
    [`A${octave[1]}`]: [
      Tone.Frequency(`A${octave[1]}`),
      Tone.Frequency(`C${octave[2]}`),
      Tone.Frequency(`E${octave[2]}`),
    ],
    [`A#${octave[1]}`]: [
      Tone.Frequency(`A#${octave[1]}`),
      Tone.Frequency(`C#${octave[2]}`),
      Tone.Frequency(`F${octave[2]}`),
    ],
    [`B${octave[1]}`]: [
      Tone.Frequency(`B${octave[1]}`),
      Tone.Frequency(`D${octave[2]}`),
      Tone.Frequency(`F#${octave[2]}`),
    ],
  };

  const playMajorChord = (note) => {
    setCurrentNote(`${note} Major Chord`);
    Tone.loaded().then(() => {
      piano.triggerAttack(MAJOR_CHORD_MAP[note]);
    });
  };

  const playMinorChord = (note) => {
    setCurrentNote(`${note} Minor Chord`);
    Tone.loaded().then(() => {
      piano.triggerAttack(MINOR_CHORD_MAP[note]);
    });
  };

  const releaseMajorChord = (note) => {
    piano.triggerRelease(MAJOR_CHORD_MAP[note]);
  };

  const releaseMinorChord = (note) => {
    piano.triggerRelease(MINOR_CHORD_MAP[note]);
  };

  const release = (note) => {
    piano.triggerRelease(Tone.Frequency(note));
  };

  let NOTES = [
    `C${octave[0]}`,
    `C#${octave[0]}`,
    `D${octave[0]}`,
    `D#${octave[0]}`,
    `E${octave[0]}`,
    `F${octave[0]}`,
    `F#${octave[0]}`,
    `G${octave[0]}`,
    `G#${octave[0]}`,
    `A${octave[0]}`,
    `A#${octave[0]}`,
    `B${octave[0]}`,
    `C${octave[1]}`,
    `C#${octave[1]}`,
    `D${octave[1]}`,
    `D#${octave[1]}`,
    `E${octave[1]}`,
    `F${octave[1]}`,
    `F#${octave[1]}`,
    `G${octave[1]}`,
    `G#${octave[1]}`,
    `A${octave[1]}`,
    `A#${octave[1]}`,
    `B${octave[1]}`,
    `C${octave[2]}`,
    `C#${octave[2]}`,
    `D${octave[2]}`,
    `D#${octave[2]}`,
    `E${octave[2]}`,
    `F${octave[2]}`,
    `F#${octave[2]}`,
    `G${octave[2]}`,
    `G#${octave[2]}`,
    `A${octave[2]}`,
    `A#${octave[2]}`,
    `B${octave[2]}`,
  ];

  return (
    <PianoKeyContainer>
      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={note}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
            majorChordHandler={playMajorChord}
            majorChordRelease={releaseMajorChord}
            minorChordHandler={playMinorChord}
            minorChordRelease={releaseMinorChord}
          />
        ) : (
          <PianoKey
            noteName={note}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
            key={index}
            majorChordHandler={playMajorChord}
            majorChordRelease={releaseMajorChord}
            minorChordHandler={playMinorChord}
            minorChordRelease={releaseMinorChord}
          />
        )
      )}
    </PianoKeyContainer>
  );
};

export default Piano;
