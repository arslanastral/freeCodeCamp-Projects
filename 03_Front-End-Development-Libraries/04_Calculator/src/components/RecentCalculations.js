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

const Calculation = styled.input`
  font-family: "Inter", sans-serif;
  background: none;
  font-weight: 200;
  font-size: 17px;
  color: #8a8585;
  white-space: nowrap;
  animation: fadeInDown;
  animation-duration: 0.7s;
  cursor: pointer;
  text-align: right;
  max-width: 100%;
  border: none;

  &:focus {
    outline: none;
    border: 0;
  }
`;

const RecentCalculations = () => {
  const {
    history,
    expression,
    setexpression,
    setequalPressed,
    setexpressionPressed,
  } = React.useContext(CalculatorContext);

  const handleRecentCalClick = (expr) => {
    if (expr !== expression) {
      setexpression(expr);
      setexpressionPressed(true);
      setequalPressed(false);
    }
  };

  const recentHistory = history.slice(-2);
  return (
    <RecentCalculationsContainer>
      {recentHistory.map((calc) => (
        <Calculation
          key={calc.expression}
          value={` ${calc.expression} = ${calc.answer}`}
          size={calc.expression.length + calc.answer.length + 3}
          onMouseDown={() => handleRecentCalClick(calc.expression)}
          readOnly
        />
      ))}
    </RecentCalculationsContainer>
  );
};

export default RecentCalculations;
