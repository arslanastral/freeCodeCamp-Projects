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
  margin: 23px;
  width: 249px;
  height: 50px;
`;

const Screen = () => {
  const {
    setcurrentInstrument,
    currentInstrument,
    instrument,
    // setpiano,
    // piano,
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
    console.log(currentInstrument);
  };

  return (
    <ScreenContainer>
      <DisplayScreen />
      <SelecterContainer>
        <Select
          styles={{
            // Fixes the overlapping problem of the component
            menu: (provided) => ({ ...provided, zIndex: 9999 }),
          }}
          options={options}
          onChange={handleInstrumentChange}
          placeholder={"Select Instrument"}
          defaultValue={{ value: "piano", label: "Piano" }}
        />
      </SelecterContainer>
    </ScreenContainer>
  );
};

export default Screen;
