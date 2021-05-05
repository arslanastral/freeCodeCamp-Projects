import React from "react";
import Piano from "./Piano";
import styled from "styled-components";

const PianoBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(102, 173, 222, 1) 0%,
    rgba(55, 112, 227, 1) 52%,
    rgba(72, 45, 253, 1) 100%
  );
  height: 48%;
  border-radius: 0 0 19px 19px;
  display: flex;
`;

const PianoBoard = ({ setcurrentNote }) => {
  return (
    <PianoBoardContainer>
      <Piano setcurrentNote={setcurrentNote} />
    </PianoBoardContainer>
  );
};

export default PianoBoard;
