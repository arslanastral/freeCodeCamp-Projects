import styled from "styled-components";
import React from "react";
import ScreenButton from "./ScreenButton";
import RecentCalculations from "./RecentCalculations";
import Expression from "./Expression";
import Answer from "./Answer";
import { CalculatorContext } from "./CalculatorBoard";

const ScreenContainer = styled.div`
  background-color: ${({ currentScreenColor }) => currentScreenColor};
  border-radius: 18px;
  margin: 80px auto 0px auto;
  width: 342px;
  height: 166px;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
  transition: all ease-in 1s;
`;

const HistoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45%;
`;

const CalculationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 55%;
`;

const Screen = () => {
  const { currentTheme } = React.useContext(CalculatorContext);

  return (
    <ScreenContainer currentScreenColor={currentTheme.screen}>
      <HistoryWrapper>
        <ScreenButton />
        <RecentCalculations />
      </HistoryWrapper>
      <CalculationsWrapper>
        <Expression />
        <Answer />
      </CalculationsWrapper>
    </ScreenContainer>
  );
};

export default Screen;
