/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { DrumMachineContext } from "./DrumMachine";
import * as Tone from "tone";
import styled from "styled-components";
import { Slider } from "react-nexusui";

const OctavesContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 237px;
  height: 26px;
  color: white;
  background-color: #131516;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  padding: 5px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
`;

const OctaveTitle = styled.span`
  margin-left: 5px;
`;

const OctaveButton = styled.button`
  width: 20px;
  height: 20px;
  color: black;
  background-color: white;
  border-radius: 50px;
  margin-left: 8px;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const Octaves = () => {
  const {
    setOctave,
    octave,
    isRecording,
    setisRecording,
    setrecordedNote,
    recordedNote,
    piano,
  } = React.useContext(DrumMachineContext);

  const [transportBPM, settransportBPM] = useState(Tone.Transport.bpm.value);

  useEffect(() => {
    Tone.Transport.bpm.value = transportBPM;
  });

  const updateNegativeOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [0, 1, 2].toString()) {
      return;
    }
    let newOctave = octave.map((oct) => {
      if (oct) {
        return --oct;
      }
    });

    setOctave(newOctave);
  };

  const updatePositiveOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [7, 8, 9].toString()) {
      return;
    }
    let newOctave = octave.map((oct) => {
      if (oct >= 0) {
        return ++oct;
      }
    });

    setOctave(newOctave);
  };

  const recordNote = () => {
    if (isRecording) {
      return;
    }

    setisRecording(true);
  };

  const stopNoteRecord = () => {
    setisRecording(false);
  };

  const pausePlayTransport = () => {
    if (Tone.Transport.state === "started") {
      console.log("Stopping Playback...");
      Tone.Transport.stop();
    } else {
      console.log("Starting Playback...");
      Tone.Transport.start();
    }
  };

  const resetRecordedNotes = () => {
    setrecordedNote([]);
  };

  const playRecNotes = () => {
    console.log(recordedNote);
    if (!recordedNote.length) {
      console.log("Nothing to play!");
      return;
    }

    const seq = new Tone.Sequence((time, note) => {
      piano.triggerAttackRelease(Tone.Frequency(note), 0.1, time);
      // subdivisions are given as subarrays
    }, recordedNote).start(0);

    // let diff = recordedNote.map((ele, i, arr) => {
    //   return i === 0
    //     ? [0, ele[1]]
    //     : [(ele[0] - arr[i - 1][0]).toFixed(3), ele[1]];
    // });

    // console.log(diff);

    // const part = new Tone.Part((time, note) => {
    //   piano.triggerAttackRelease(note, "@1m", time);
    // }, diff).start(0);
    // part.loop = true;

    Tone.Transport.start();
  };

  useKey("-", updateNegativeOctaveHandler, octave, setOctave);
  useKey("=", updatePositiveOctaveHandler, octave, setOctave);

  return (
    <OctavesContainer>
      <OctaveTitle>Octave</OctaveTitle>
      <ButtonContainer>
        <OctaveButton
          onClick={() => updateNegativeOctaveHandler(octave, setOctave)}
        >
          -
        </OctaveButton>
        <OctaveButton
          onClick={() => updatePositiveOctaveHandler(octave, setOctave)}
        >
          +
        </OctaveButton>
        <OctaveButton onClick={recordNote}>⏺</OctaveButton>
        <OctaveButton onClick={stopNoteRecord}>⏹</OctaveButton>
        <OctaveButton onClick={playRecNotes}>▶</OctaveButton>
        <OctaveButton onClick={pausePlayTransport}>⏯</OctaveButton>
        <OctaveButton onClick={resetRecordedNotes}>🗑️</OctaveButton>
      </ButtonContainer>
      <Slider
        size={[70, 30]}
        mode="relative"
        min={0}
        max={200}
        step={10}
        value={transportBPM}
        onChange={settransportBPM}
      />
    </OctavesContainer>
  );
};

const useKey = (key, down, octaveArr, setOctavefunc) => {
  const downcallbackRef = React.useRef(down);
  const octaveRef = React.useRef(octaveArr);
  const setOctaveRef = React.useRef(setOctavefunc);

  React.useEffect(() => {
    downcallbackRef.current = down;
    octaveRef.current = octaveArr;
  });

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.repeat) {
        return;
      }
      if (event.key === key) {
        downcallbackRef.current(octaveRef.current, setOctaveRef.current);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, octaveArr]);
};

export default Octaves;
