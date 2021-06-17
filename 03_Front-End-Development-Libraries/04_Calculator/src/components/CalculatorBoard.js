import styled from "styled-components";
import React, { useState, useRef } from "react";
import Screen from "./Screen";
import History from "./History";
import Appearance from "./Appearance";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  background: ${({ currentBodyColor }) => currentBodyColor};
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
  const { currentTheme } = React.useContext(CalculatorContext);
  console.log(currentTheme);
  return (
    <CalculatorContainer currentBodyColor={currentTheme.body}>
      <Screen />
      <NumberPad />
      <History />
      <Appearance />
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
  const [currentTheme, setcurrentTheme] = useLocalStorageState(
    { body: "blue", screen: "black", button: "black" },
    "Calculator Theme"
  );
  const [isHistoryToggled, setisHistoryToggled] = useState(false);
  const [isInverseToggled, setisInverseToggled] = useState(false);
  const [history, sethistory] = useLocalStorageState([], "Calculator History");
  const [isAppearanceToggled, setisAppearanceToggled] = useState(false);
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
        currentTheme,
        setcurrentTheme,
        isAppearanceToggled,
        setisAppearanceToggled,
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
