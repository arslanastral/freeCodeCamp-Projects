import React from "react";

import styled from "styled-components";

const DrumPad = styled.button`
  background: #101010;
  width: 65px;
  height: 65px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.98);
    background: ${(props) => props.color};
    box-shadow: 0 0 50px ${(props) => props.color};
  }
`;

const Pad = ({ color, onMouseDown }) => {
  return <DrumPad color={color} onMouseDown={onMouseDown} />;
};

export default Pad;
