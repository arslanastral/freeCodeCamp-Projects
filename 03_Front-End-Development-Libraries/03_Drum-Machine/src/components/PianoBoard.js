import React from "react";
import Piano from "./Piano";
import styled from "styled-components";

const PianoBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #72553a 0%, rgba(114, 85, 58, 0) 100%);
  height: 48%;
  border-radius: 0 0 19px 19px;
`;

const PianoBoard = () => {
  return (
    <PianoBoardContainer>
      <Piano />
    </PianoBoardContainer>
  );
};

export default PianoBoard;
