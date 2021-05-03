import React from "react";
import styled from "styled-components";

const PianoBlackKey = styled.button`
  width: 28px;
  height: 150px;
  margin-left: -14px;
  margin-right: -14px;
  background: #000000;
  border: 0;
  padding: 0;
  border-radius: 0px 0px 5px 6px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
  z-index: 2;

  &:active {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.55);
  }
`;

const PianoFlatKey = () => {
  return <PianoBlackKey></PianoBlackKey>;
};

export default PianoFlatKey;
