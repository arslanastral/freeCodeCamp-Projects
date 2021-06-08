import styled from "styled-components";
import React from "react";
import "animate.css";
import { CalculatorContext } from "./CalculatorBoard";

const RecentCalculationsContainer = styled.div`
  margin: -10px 18px 0 0;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Calculation = styled.span`
  /* margin: 10px; */
  font-family: "Inter", sans-serif;
  font-weight: 200;
  margin-bottom: 4px;
  /* font-style: italic; */
  font-size: 17px;
  color: #8a8585;
  white-space: nowrap;
  animation: backInLeft;
  animation-duration: 0.7s;
`;

const RecentCalculations = () => {
  const { history } = React.useContext(CalculatorContext);

  const recentHistory = history.slice(-2);
  return (
    <RecentCalculationsContainer>
      {recentHistory.map((calc) => (
        <Calculation key={calc.expression}>
          {calc.expression} = {calc.answer}
        </Calculation>
      ))}
    </RecentCalculationsContainer>
  );
};

export default RecentCalculations;
