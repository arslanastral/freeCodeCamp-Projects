import React from "react";
import PianoKey from "./PianoKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  /* background: black; */
  display: flex;
  width: 966px;
  height: 100%;
`;

const Piano = () => {
  return (
    <PianoKeyContainer>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
      <PianoKey></PianoKey>
    </PianoKeyContainer>
  );
};

export default Piano;
