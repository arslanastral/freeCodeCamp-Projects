import React from "react";
import styled from "styled-components";

const PianoBlackKey = styled.div`
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

  &:active {
    box-shadow: 0px 3px rgba(0, 0, 0, 1);
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
  }
`;

const PianoFlatKey = ({ onMouseEnter, onMouseOut }) => {
  return (
    <PianoBlackKey
      onMouseEnter={onMouseEnter}
      onMouseDown={onMouseEnter}
      onMouseUp={onMouseOut}
      onMouseLeave={onMouseOut}
    ></PianoBlackKey>
  );
};

export default PianoFlatKey;
