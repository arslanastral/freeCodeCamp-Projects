import React from "react";
import styled from "styled-components";

const PianoBoardContainer = styled.div`
  background-color: #f2f2f2;
  height: 50%;
  border-radius: 0 0 19px 19px;
`;

const PianoBoard = () => {
  return <PianoBoardContainer>Piano</PianoBoardContainer>;
};

export default PianoBoard;
