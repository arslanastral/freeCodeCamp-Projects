import styled from "styled-components";
import React, { useState } from "react";
import Screen from "./Screen";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  background: blue;
  border-radius: 18px;
  height: 682px;
  width: 465px;
`;

const CalculatorBoard = () => {
  return (
    <CalculatorProvider>
      <CalculatorWrapper />
    </CalculatorProvider>
  );
};

// eslint-disable-next-line react/display-name
const CalculatorWrapper = React.memo(() => {
  return (
    <CalculatorContainer>
      <Screen />
      <NumberPad />
    </CalculatorContainer>
  );
});

export const CalculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [expression, setexpression] = useState("");
  const [answer, setanswer] = useState("0");

  return (
    <CalculatorContext.Provider
      value={{
        expression,
        setexpression,
        answer,
        setanswer,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorBoard;
