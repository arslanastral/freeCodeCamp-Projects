import React from "react";
import Pad from "./Pad";
import styled from "styled-components";
import { DrumMachineContext } from "./DrumMachine";

const DrumPadsContainer = styled.div`
  display: grid;
  width: 230px;
  grid-gap: 11px;
  grid-template-columns: repeat(3, 0fr);
  justify-content: right;
  margin: 0 22px 0 22px;
  align-content: center;
`;

const DrumPads = () => {
  const { drumpadsounds } = React.useContext(DrumMachineContext);

  const padColors = [
    "red",
    "yellow",
    "blue",
    "red",
    "yellow",
    "blue",
    "red",
    "yellow",
    "blue",
  ];

  return (
    <DrumPadsContainer>
      {drumpadsounds.map((sound, i) => (
        <Pad key={i} color={padColors[i]} onMouseDown={() => sound.start()} />
      ))}
    </DrumPadsContainer>
  );
};

export default DrumPads;
