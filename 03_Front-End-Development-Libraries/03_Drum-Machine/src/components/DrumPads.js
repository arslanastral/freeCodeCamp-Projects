import React from "react";
import Pad from "./Pad";
import styled from "styled-components";

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
