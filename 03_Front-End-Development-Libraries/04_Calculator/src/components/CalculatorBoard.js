import styled from "styled-components";
import React, { useState } from "react";
import Screen from "./Screen";
import History from "./History";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  background: blue;
  border-radius: 18px;
  height: 682px;
  width: 365px;
  position: relative;
  overflow: hidden;
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
      <History />
    </CalculatorContainer>
  );
});

export const CalculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [expression, setexpression] = useState("");
  const [answer, setanswer] = useState("0");
  const [equalPressed, setequalPressed] = useState(false);
  const [expressionPressed, setexpressionPressed] = useState(true);
  const [isExpanded, setisExpanded] = useState(false);
  const [isHistoryToggled, setisHistoryToggled] = useState(false);
  const [scope, setscope] = useState({});
  const [history, sethistory] = useState([]);

  return (
    <CalculatorContext.Provider
      value={{
        expression,
        setexpression,
        answer,
        setanswer,
        equalPressed,
        setequalPressed,
        expressionPressed,
        setexpressionPressed,
        isHistoryToggled,
        setisHistoryToggled,
        isExpanded,
        setisExpanded,
        scope,
        history,
        sethistory,
        setscope,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorBoard;
