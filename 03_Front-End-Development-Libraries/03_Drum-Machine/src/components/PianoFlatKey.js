import React from "react";
import styled from "styled-components";

const PianoBlackKey = styled.div`
  width: 28px;
  height: 150px;
  margin-left: -14px;
  margin-right: -14px;
  background: #000000;
  border-radius: 0px 0px 5px 6px;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
`;

const PianoFlatKey = () => {
  return <PianoBlackKey></PianoBlackKey>;
};

export default PianoFlatKey;
