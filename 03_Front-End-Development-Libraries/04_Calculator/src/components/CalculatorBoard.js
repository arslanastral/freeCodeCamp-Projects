import styled from "styled-components";
import React, { useState, useRef } from "react";
import Screen from "./Screen";
import EasterEggCal from "./easteregg";
import History from "./History";
import Appearance from "./Appearance";
import NumberPad from "./NumberPad";

const CalculatorContainer = styled.div`
  display: ${({ easteregg }) => (easteregg ? "none" : "")};
  background-color: ${({ currentBodyColor }) => currentBodyColor};
  background-image: ${({ currentGradient }) => currentGradient};
  border-radius: 18px;
  height: 682px;
  width: 365px;
  position: relative;
  overflow: hidden;
  transition: all ease-in 1s;
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
  const { currentTheme, easteregg } = React.useContext(CalculatorContext);
  let eastereggContent;

  if (easteregg) {
    eastereggContent = <EasterEggCal />;
  }
  return (
    <div>
      {eastereggContent}
      <CalculatorContainer
        easteregg={easteregg}
        currentBodyColor={currentTheme.body}
        currentGradient={currentTheme.gradient}
      >
        <Screen />
        <NumberPad />
        <History />
        <Appearance />
      </CalculatorContainer>
    </div>
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
    { body: "blue", screen: "black", button: "#fff", gradient: "" },
    "Calculator Theme"
  );
  const [isHistoryToggled, setisHistoryToggled] = useState(false);
  const [isInverseToggled, setisInverseToggled] = useState(false);
  const [history, sethistory] = useLocalStorageState([], "Calculator History");
  const [isAppearanceToggled, setisAppearanceToggled] = useState(false);
  const [easteregg, seteasteregg] = useState(false);
  const [skinUnlocked, setskinUnlocked] = useLocalStorageState(
    "NOOOOoOO0O!",
    "skinUnlocked"
  );
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
        skinUnlocked,
        setskinUnlocked,
        isAppearanceToggled,
        setisAppearanceToggled,
        isInverseToggled,
        setisInverseToggled,
        easteregg,
        seteasteregg,
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
