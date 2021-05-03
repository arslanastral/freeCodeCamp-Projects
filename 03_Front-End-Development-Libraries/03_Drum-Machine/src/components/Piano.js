import React from "react";
import * as Tone from "tone";
import PianoKey from "./PianoKey";
import PianoFlatKey from "./PianoFlatKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  background: gray;
  display: flex;
  gap: 2px;
  width: 966px;
  height: 100%;
`;

const Piano = () => {
  const playC4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <PianoKeyContainer>
      <PianoKey onClick={playC4} />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
      <PianoFlatKey />
      <PianoKey />
    </PianoKeyContainer>
  );
};

export default Piano;
