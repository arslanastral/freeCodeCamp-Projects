import styled from "styled-components";
import React from "react";
import "animate.css";
import { CalculatorContext } from "./CalculatorBoard";

const RecentCalculationsContainer = styled.div`
  margin: 0px 15px 0px 0px;
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
  margin-bottom: 4px;
  font-style: italic;
  font-size: 20px;
  color: #989898;
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
