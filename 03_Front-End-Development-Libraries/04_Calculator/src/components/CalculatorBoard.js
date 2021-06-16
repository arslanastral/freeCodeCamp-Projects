import styled from "styled-components";
import React, { useState, useRef } from "react";
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
  const [isExpanded, setisExpanded] = useLocalStorageState(
    false,
    "isExpanded?"
  );
  const [isHistoryToggled, setisHistoryToggled] = useState(false);
  const [isInverseToggled, setisInverseToggled] = useState(false);
  const [history, sethistory] = useLocalStorageState([], "Calculator History");
  const scope = useRef({});
  const inputRef = useRef();

  return (
    <CalculatorContext.Provider
      value={{
        expression,
        setexpression,
        answer,
        setanswer,
        equalPressed,
        setequalPressed,
        scope,
        expressionPressed,
        setexpressionPressed,
        isHistoryToggled,
        setisHistoryToggled,
        isInverseToggled,
        setisInverseToggled,
        isExpanded,
        setisExpanded,
        history,
        sethistory,
        inputRef,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

const useLocalStorageState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default CalculatorBoard;
