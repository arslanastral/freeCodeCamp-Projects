import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DrumMachineContext } from "./DrumMachine";
import { Dial } from "react-nexusui";

const DawContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const SequencerContainer = styled.div`
  height: 57%;
`;

const KnobsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 43%;
`;
const KnobWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const KnobTitle = styled.span`
  margin-top: 10px;
  font-family: sans-serif;
  align-self: center;
  color: white;
  font-size: 0.9rem;
`;

const Knobs = () => {
  const { audioEffects, piano, instrument } = React.useContext(
    DrumMachineContext
  );

  const [masterVolume, setmasterVolume] = useState(0);
  const [release, setrelease] = useState(40);
  // eslint-disable-next-line no-unused-vars
  const [detuneVal, setdetuneVal] = useState(-1200);
  const [filter0, setfilter0] = useState(0);
  const [filter1, setfilter1] = useState(0);
  const [filter2, setfilter2] = useState(0);

  useEffect(() => {
    piano.volume.value = masterVolume;
    piano.release = release;
    audioEffects[0].wet.value = filter0 / 100;
    audioEffects[1].wet.value = filter1 / 100;
    audioEffects[2].wet.value = filter2 / 100;
    instrument.polysynth.set({ detune: detuneVal });
  });

  return (
    <DawContainer>
      <SequencerContainer></SequencerContainer>
      <KnobsContainer>
        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={-80}
            max={20}
            step={1}
            interaction="radial"
            value={masterVolume}
            onChange={setmasterVolume}
          ></Dial>

          <KnobTitle>Volume</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={1}
            interaction="radial"
            value={release}
            onChange={setrelease}
          ></Dial>
          <KnobTitle>Release</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={1}
            interaction="radial"
            value={filter0}
            onChange={setfilter0}
          ></Dial>

          <KnobTitle>{audioEffects[0].name}</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={1}
            interaction="radial"
            value={filter1}
            onChange={setfilter1}
          ></Dial>

          <KnobTitle>{audioEffects[1].name}</KnobTitle>
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter2}
            onChange={setfilter2}
          ></Dial>

          <KnobTitle>{audioEffects[2].name}</KnobTitle>
        </KnobWrapper>
      </KnobsContainer>
    </DawContainer>
  );
};

export default Knobs;
