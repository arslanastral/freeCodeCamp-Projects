import React from "react";
import DisplayScreen from "./DisplayScreen";
import { DrumMachineContext } from "./DrumMachine";
import styled from "styled-components";
import Select from "react-select";

const ScreenContainer = styled.div`
  grid-area: screen;
  /* background-color: yellow; */
`;

const SelecterContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 249px;
  height: 50px;
`;

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
`;

const Screen = () => {
  const {
    setcurrentInstrument,
    setOctave,
    octave,
    instrument,
  } = React.useContext(DrumMachineContext);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const options = Object.keys(instrument).map((e) => ({
    value: e,
    label: e.replace(/-/g, " ").replace(/^./, function (x) {
      return x.toUpperCase();
    }),
  }));

  const handleInstrumentChange = (v) => {
    setcurrentInstrument(v.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "#131516",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "blue" : "#131516",
      color: "#fff",
      "&:hover": {
        background: state.isSelected ? "blue" : "#212425",
      },
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999, background: "#131516" }),
  };

  const updateNegativeOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [1, 2, 3].toString()) {
      return;
    }
    // const octaveMin = (octave) => Math.min(...octave);
    let newOctave = octave.map((oct) => {
      if (oct) {
        return --oct;
      }
    });

    setOctave(newOctave);
    console.log(octave);
  };

  const updatePositiveOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [7, 8, 9].toString()) {
      return;
    }
    let newOctave = octave.map((oct) => {
      if (oct) {
        return ++oct;
      }
    });

    setOctave(newOctave);
    console.log(octave);
  };

  return (
    <ScreenContainer>
      <DisplayScreen />
      <SelecterContainer>
        <Select
          styles={customStyles}
          options={options}
          onChange={handleInstrumentChange}
          defaultValue={{ value: "piano", label: "🎹 Piano" }}
          isSearchable={false}
        />
      </SelecterContainer>
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
    </ScreenContainer>
  );
};

export default Screen;
