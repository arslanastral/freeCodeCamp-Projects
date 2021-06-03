import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const ExpressionContainer = styled.div`
  margin: 0px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* background: green; */
  height: 40%;
  width: 94%;
  font-family: "Inter", sans-serif;
  font-size: 32px;
`;

const StyledInput = styled.input`
  /* outline: none; */
  border: 0px;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  text-align: right;

  &:focus {
    border-radius: 5px;
  }
`;

const Expression = () => {
  const { setexpression, expression } = React.useContext(CalculatorContext);

  const handleExpression = (e) => {
    if (expression.length === 0 && /[×+÷\-=.]/g.test(e.target.value)) {
      setexpression(`0${e.target.value}`);
      // Do not repeat operator
    } else
      setexpression(e.target.value.replace(/x/gi, "×").replace(/[/]/g, "÷"));
  };

  return (
    <ExpressionContainer>
      <StyledInput
        name="expression"
        value={expression}
        onChange={handleExpression}
      />
    </ExpressionContainer>
  );
};

export default Expression;
