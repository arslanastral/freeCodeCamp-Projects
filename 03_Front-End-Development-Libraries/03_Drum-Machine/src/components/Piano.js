/* eslint-disable */
import React, { useEffect } from "react";
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
  } = React.useContext(DrumMachineContext);

  let NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  let piano = instrument[currentInstrument];

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

  // const playKeyboardNote = (note, key) => {
  //   if (e.repeat) {
  //     return;
  //   }
  //   if (e.key === key) {
  //     setCurrentNote(note);
  //     Tone.loaded().then(() => {
  //       piano.triggerAttack(note);
  //     });
  //   }
  // };

  const playKeyboardNote = () => {
    // if (e.key === key) {
    setCurrentNote("C3");
    Tone.loaded().then(() => {
      piano.triggerAttackRelease("C3");
    });
    // }
  };

  const release = (note) => {
    piano.triggerRelease(note);
  };

  const releaseKey = () => {
    piano.triggerRelease("C3");
  };

  // useKeyPressEvent("q", playKeyboardNote("C3"), playKeyboardNote("C3"));

  useKey("q", releaseKey, playKeyboardNote);

  return (
    <PianoKeyContainer>
      {NOTES.map((note, index) =>
        note.includes("#") ? (
          <PianoKey
            noteName={`${note}3`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}3`}
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
            noteName={`${note}4`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}4`}
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
            noteName={`${note}5`}
            onMouseEnter={playNote}
            onMouseLeave={release}
            isFlatKey={true}
            key={index}
          />
        ) : (
          <PianoKey
            noteName={`${note}5`}
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

const useKey = (key, up, down) => {
  const upcallbackRef = React.useRef(up);
  const downcallbackRef = React.useRef(down);

  useEffect(() => {
    upcallbackRef.current = up;
    downcallbackRef.current = down;
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.repeat) {
        return;
      }
      if (event.key === key) {
        downcallbackRef.current(event);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === key) {
        upcallbackRef.current(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [key]);
};

export default Piano;
