import React from "react";
import styled from "styled-components";
import { DrumMachineContext } from "./DrumMachine";
import { Knob, Arc, Value, Pointer } from "rc-knob";

const KnobsContainer = styled.div`
  grid-area: knobs;
`;

const Knobs = () => {
  const { setrelease, setmasterVolume } = React.useContext(DrumMachineContext);
  return (
    <KnobsContainer>
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        min={20}
        max={50}
        onChange={(value) => setrelease(value)}
      >
        <Arc arcWidth={5} color="#FC5A96" radius={47.5} />
        <Pointer width={5} radius={40} type="circle" color={"blue"} />
        <Value marginBottom={40} className="value" />
      </Knob>
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        min={-20}
        max={20}
        onChange={(value) => setmasterVolume(value)}
      >
        <Arc arcWidth={5} color="#FC5A96" radius={47.5} />
        <Pointer width={5} radius={40} type="circle" color={"blue"} />
        <Value marginBottom={40} className="value" />
        <p>Distortion</p>
      </Knob>
    </KnobsContainer>
  );
};

export default Knobs;
