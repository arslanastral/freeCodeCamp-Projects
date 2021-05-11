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

  let NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  return (
    <PianoKeyContainer>
      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}${octave[0]}`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}${octave[0]}`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
            key={index}
          />
        )
      )}

      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}${octave[1]}`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}${octave[1]}`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={false}
            key={index}
          />
        )
      )}

      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}${octave[2]}`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}${octave[2]}`}
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
