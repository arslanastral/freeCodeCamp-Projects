import styled from "styled-components";
import React from "react";
import Screen from "./Screen";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  background: blue;
  border-radius: 18px;
  height: 682px;
  width: 365px;
`;

const CalculatorBoard = () => {
  return (
    <CalculatorContainer>
      <Screen />
      <NumberPad />
    </CalculatorContainer>
  );
};

export default CalculatorBoard;
