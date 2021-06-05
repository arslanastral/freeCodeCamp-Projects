import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const ExpressionContainer = styled.div`
  margin: 0px 15px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 40%;
  width: 94%;
`;

const StyledInput = styled.input`
  font-family: "Inter", sans-serif;
  color: ${(props) => (props.expressionPressed ? "black" : "#333")};
  font-size: ${(props) => (props.expressionPressed ? "42px" : "32px")};
  /* outline: none; */
  border: 0px;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  text-align: right;
  transition: all ease-out 0.07s;

  &:focus {
    /* border-radius: 5px; */
    outline: none;
    border: 0px;
  }
`;

const Expression = () => {
  const {
    setexpression,
    expression,
    expressionPressed,
    setexpressionPressed,
    equalPressed,
    setequalPressed,
  } = React.useContext(CalculatorContext);

  const handleExpression = (e) => {
    console.log(e.target.value.length);
    console.log(e.target.value);

    if (/[@a-wy-z=\s]/gi.test(e.target.value)) {
      return;
    }

    if (e.target.value.length === 1 && /[x^+/!\-.]/gi.test(e.target.value)) {
      setexpression(`0${e.target.value}`);
      // Do not repeat operator
    } else if (/([-+x×/÷])[-+x×/]+/gi.test(e.target.value)) {
      setexpression(`${expression.replace(/([-+x×/÷])[-+x×/÷]+\1/gi, "$1")}`);
    } else setexpression(e.target.value);
  };

  // .replace(/([-+×÷])[-+×÷]+\1/gi, "$1")

  const handleExpressionPress = () => {
    if (equalPressed === false) {
      setexpressionPressed(true);
    } else if (equalPressed === true) {
      setexpressionPressed(true);
      setequalPressed(false);
    }
  };

  return (
    <ExpressionContainer>
      <StyledInput
        name="expression"
        onClick={handleExpressionPress}
        expressionPressed={expressionPressed}
        value={expression.replace(/[x*]/gi, "×").replace(/[/]/g, "÷")}
        onChange={handleExpression}
      />
    </ExpressionContainer>
  );
};

export default Expression;
