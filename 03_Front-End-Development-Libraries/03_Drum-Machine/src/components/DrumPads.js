import React from "react";
import Pad from "./Pad";
import styled from "styled-components";

const DrumPadsContainer = styled.div`
  grid-area: drums;
  display: grid;
  grid-gap: 11px;
  grid-template-columns: repeat(3, 0fr);
  justify-content: right;
  margin-right: 22px;
  align-content: center;
`;

const DrumPads = () => {
  return (
    <DrumPadsContainer>
      <Pad />
      <Pad />
      <Pad />
      <Pad />
      <Pad />
      <Pad />
      <Pad />
      <Pad />
      <Pad />
    </DrumPadsContainer>
  );
};

export default DrumPads;
