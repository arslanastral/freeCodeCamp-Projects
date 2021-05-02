import React from "react";
import styled from "styled-components";

const WhitePianoKey = styled.div`
  width: 46px;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const PianoKey = () => {
  return <WhitePianoKey></WhitePianoKey>;
};

export default PianoKey;
