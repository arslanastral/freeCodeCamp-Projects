import styled from "styled-components";
import React, { useState, useRef } from "react";
import Screen from "./Screen";
import History from "./History";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  background: blue;
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1605106715994-18d3fecffb98")
      no-repeat center center fixed; */
  /* background-size: cover; */
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
  const [isInverseToggled, setisInverseToggled] = useState(false);
  const [history, sethistory] = useLocalStorageState([], "Calculator History");

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
