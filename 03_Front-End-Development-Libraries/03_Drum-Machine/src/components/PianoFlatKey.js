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
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  z-index: 2;
`;

const PianoFlatKey = ({ onMouseEnter, onMouseLeave, noteName }) => {
  return (
    <PianoBlackKey
      className={noteName.replace("#", "sharp")}
      onMouseEnter={(e) => {
        onMouseEnter(e, noteName);
      }}
      onMouseDown={(e) => {
        onMouseEnter(e, noteName);
      }}
      onMouseUp={() => onMouseLeave(noteName)}
      onMouseLeave={() => onMouseLeave(noteName)}
    ></PianoBlackKey>
  );
};

export default PianoFlatKey;
