import React from "react";
import styled from "styled-components";
import { DrumMachineContext } from "./DrumMachine";
import { Knob, Pointer, Arc, Value } from "rc-knob";

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
  margin-top: -20px;
  font-family: sans-serif;
  align-self: center;
  color: white;
  font-size: 0.9rem;
`;

const Knobs = () => {
  const { audioEffects, piano } = React.useContext(DrumMachineContext);

  return (
    <DawContainer>
      <SequencerContainer></SequencerContainer>
      <KnobsContainer>
        <KnobWrapper>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={-80}
            max={20}
            className="styledKnob"
            value={piano.volume.value}
            onChange={(value) => (piano.volume.value = value)}
          >
            <Arc arcWidth={1.5} color="white" />
            <circle r="40" cx="50" cy="50" fill="#333" />
            <Value marginBottom={45} className="knobValue" />
            <Pointer
              width={2}
              height={35}
              radius={10}
              type="rect"
              color="#fff"
            />
          </Knob>
          <KnobTitle>Volume</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={1}
            max={100}
            className="styledKnob"
            value={piano.release}
            onChange={(value) => (piano.release = value)}
          >
            <Arc arcWidth={1.5} color="white" />
            <circle r="40" cx="50" cy="50" fill="#333" />
            <Value marginBottom={45} className="knobValue" />
            <Pointer
              width={2}
              height={35}
              radius={10}
              type="rect"
              color="#fff"
            />
          </Knob>
          <KnobTitle>Release</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={0.0}
            max={1}
            value={audioEffects[1].wet.value}
            className="styledKnob"
            onChange={(value) => (audioEffects[1].wet.value = value)}
          >
            <Arc arcWidth={1.5} color="white" />
            <circle r="40" cx="50" cy="50" fill="#333" />
            <Value marginBottom={45} className="knobValue" />
            <Pointer
              width={2}
              height={35}
              radius={10}
              type="rect"
              color="#fff"
            />
          </Knob>
          <KnobTitle>AutoWah</KnobTitle>
        </KnobWrapper>
        <KnobWrapper>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={0.0}
            max={1}
            value={audioEffects[0].wet.value}
            className="styledKnob"
            onChange={(value) => (audioEffects[0].wet.value = value)}
          >
            <Arc arcWidth={1.5} color="white" />
            <circle r="40" cx="50" cy="50" fill="#333" />
            <Value marginBottom={45} className="knobValue" />
            <Pointer
              width={2}
              height={35}
              radius={10}
              type="rect"
              color="#fff"
            />
          </Knob>
          <KnobTitle>Filter</KnobTitle>
        </KnobWrapper>
      </KnobsContainer>
    </DawContainer>
  );
};

export default Knobs;
