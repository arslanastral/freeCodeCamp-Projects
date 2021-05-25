import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DrumMachineContext } from "./DrumMachine";
import { Dial, Toggle } from "react-nexusui";

const DawContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const SequencerContainer = styled.div`
  height: 10%;
`;

const KnobsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 90%;
`;
const KnobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KnobTitle = styled.span`
  background-color: black;
  padding: 2px 5px 2px 6px;
  border-radius: 20px;
  border: 1px solid #1b1a19;
  margin-top: 10px;
  font-family: sans-serif;
  align-self: center;
  color: white;
  font-size: 0.8rem;
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
  const [filter3, setfilter3] = useState(0);
  const [filter4, setfilter4] = useState(0);
  const [filter5, setfilter5] = useState(0);
  const [filter6, setfilter6] = useState(0);
  const [filter7, setfilter7] = useState(0);

  useEffect(() => {
    piano.volume.value = masterVolume;
    piano.release = release;
    audioEffects[0].wet.value = filter0 / 100;
    audioEffects[1].wet.value = filter1 / 100;
    audioEffects[2].wet.value = filter2 / 100;
    audioEffects[3].wet.value = filter3 / 100;
    audioEffects[4].wet.value = filter4 / 100;
    audioEffects[5].wet.value = filter5 / 100;
    audioEffects[6].wet.value = filter6 / 100;
    audioEffects[7].wet.value = filter7 / 100;
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
          <Toggle size={[20, 20]} />
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
          <Toggle size={[20, 20]} />
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
          <Toggle size={[20, 20]} />
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
          <Toggle size={[20, 20]} />
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
          <Toggle size={[20, 20]} />
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter3}
            onChange={setfilter3}
          ></Dial>

          <KnobTitle>{audioEffects[3].name}</KnobTitle>
          <Toggle size={[20, 20]} />
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter4}
            onChange={setfilter4}
          ></Dial>

          <KnobTitle>{audioEffects[4].name}</KnobTitle>
          <Toggle size={[20, 20]} />
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter5}
            onChange={setfilter5}
          ></Dial>

          <KnobTitle>{audioEffects[5].name}</KnobTitle>
          <Toggle size={[20, 20]} />
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter6}
            onChange={setfilter6}
          ></Dial>

          <KnobTitle>{audioEffects[6].name}</KnobTitle>
          <Toggle size={[20, 20]} />
        </KnobWrapper>

        <KnobWrapper>
          <Dial
            size={[50, 50]}
            min={0}
            max={100}
            step={10}
            interaction="radial"
            value={filter7}
            onChange={setfilter7}
          ></Dial>

          <KnobTitle>{audioEffects[7].name}</KnobTitle>
          <Toggle size={[20, 20]} />
        </KnobWrapper>
      </KnobsContainer>
    </DawContainer>
  );
};

export default Knobs;
