import React from "react";
import styled from "styled-components";

const WhitePianoKey = styled.button`
  width: 46px;
  height: 100%;
  background: #ffffff;
  /* border: 1px solid rgba(0, 0, 0, 0.08);
  border-collapse: collapse; */
  border: none;
  padding: 0;
  /* border-right: 1px solid rgba(0, 0, 0, 0.08); */
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  /* border-radius: 0px 0px 8px 8px; */

  &:active {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.55);
    border: none;
  }
`;

const PianoKey = ({ onClick }) => {
  return <WhitePianoKey onClick={onClick}></WhitePianoKey>;
};

export default PianoKey;
