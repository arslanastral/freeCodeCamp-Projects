/* eslint-disable */
import React from "react";
import { DrumMachineContext } from "./DrumMachine";
import { useKeyPressEvent } from "react-use";
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
  } = React.useContext(DrumMachineContext);

  let NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  let piano = instrument[currentInstrument];
  console.log(instrument);

  React.useEffect(() => {
    piano.release = soundRelease;
    piano.volume.value = masterVolume;
    piano.chain(...audioEffects, Tone.Destination);
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

  const playKeyboardNote = (e, note, key) => {
    if (e.repeat) {
      return;
    }
    if (e.key === key) {
      setCurrentNote(note);
      Tone.loaded().then(() => {
        piano.triggerAttack(note);
      });
    }
  };

  const release = (note) => {
    piano.triggerRelease(note);
  };

  // useKeyPressEvent("q", playKeyboardNote("C3"), playKeyboardNote("C3"));

  return (
    <PianoKeyContainer>
      {/* {NOTES.map((note) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}3`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={true}
          />
        ) : (
          <PianoKey
            noteName={`${note}3`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={false}
          />
        )
      )} */}

      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}4`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}4`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={false}
            key={index}
          />
        )
      )}

      {/* {NOTES.map((note) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}5`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={true}
          />
        ) : (
          <PianoKey
            noteName={`${note}5`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            onKeyDown={playKeyboardNote}
            onKeyUp={release}
            isFlatKey={false}
          />
        )
      )} */}
    </PianoKeyContainer>
  );
};

export default Piano;
