import React from "react";
import { DrumMachineContext } from "./DrumMachine";
import styled from "styled-components";

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
  const { setOctave, octave } = React.useContext(DrumMachineContext);

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
      </ButtonContainer>
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
