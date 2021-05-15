import React from "react";
import { DrumMachineContext } from "./DrumMachine";
import styled from "styled-components";

const SelecterContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 249px;
  height: 50px;
`;

const Selecter = styled.select`
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  width: 249px;
  height: 38px;
  outline: none;
  box-shadow: none;
  appearance: none;
  background-color: rgb(19, 21, 22);
  color: white;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  scrollbar-color: #555 #333;
  cursor: pointer;
`;

const Selector = () => {
  const {
    instrument,
    currentInstrument,
    setcurrentInstrument,
  } = React.useContext(DrumMachineContext);

  const options = Object.keys(instrument);

  const handleInstrumentChange = (v) => {
    setcurrentInstrument(v.target.value);
  };

  return (
    <SelecterContainer>
      <Selecter
        defaultValue={currentInstrument}
        onChange={handleInstrumentChange}
      >
        {" "}
        {options.map((e, i) => (
          <option key={i} value={e}>
            {`🎹 ${e.replace(/-/g, " ").replace(/^./, function (x) {
              return x.toUpperCase();
            })}`}
          </option>
        ))}
      </Selecter>
    </SelecterContainer>
  );
};

export default Selector;
