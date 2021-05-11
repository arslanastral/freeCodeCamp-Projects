// /* eslint-disable */
import React from "react";
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

const Piano = () => {
  const {
    setCurrentNote,
    soundRelease,
    masterVolume,
    instrument,
    currentInstrument,
    audioEffects,
    octave,
  } = React.useContext(DrumMachineContext);

  let piano = instrument[currentInstrument];

  React.useEffect(() => {
    piano.release = soundRelease;
    piano.volume.value = masterVolume;
    piano.chain(...audioEffects, Tone.Destination);
    Tone.Destination.mute = false;
  }, [
    soundRelease,
    masterVolume,
    currentInstrument,
    audioEffects,
    piano,
    octave,
  ]);

  const playNote = (note) => {
    setCurrentNote(note);
    Tone.loaded().then(() => {
      piano.triggerAttack(Tone.Frequency(note), "+0.05");
    });
  };

  const release = (note) => {
    piano.triggerRelease(Tone.Frequency(note), "+0.05");
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
          />
        ) : (
          <PianoKey
            noteName={note}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
            key={index}
          />
        )
      )}
    </PianoKeyContainer>
  );
};

export default Piano;
