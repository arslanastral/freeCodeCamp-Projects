import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const ExpressionContainer = styled.div`
  margin: 0 15px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 40%;
  width: 94%;
`;

const StyledInput = styled.input`
  font-family: "Inter", sans-serif;
  color: ${(props) => (props.expressionPressed ? "black" : "#6c4f4f")};
  font-size: ${(props) => (props.expressionPressed ? "40px" : "32px")};
  font-weight: ${(props) => (props.expressionPressed ? "600" : "400")};
  background: none;
  border: 0;
  max-width: 100%;
  text-align: right;
  transition: all ease-out 0.07s;

  &:focus {
    outline: none;
    border: 0;
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
    inputRef,
  } = React.useContext(CalculatorContext);

  const handleExpression = (e) => {
    let currentTargetValue = e.target.value
      .replace(/[x*]/gi, "×")
      .replace(/[/]/g, "÷");
    // if (
    //   /[÷+\-!×^%]/g.test(e.target.value[e.target.value.length - 1]) &&
    //   !equalPressed &&
    //   !/[0-9]/g.test(e.target.value[e.target.value.length - 1])
    // ) {
    //   setexpression(
    //     `${e.target.value.slice(0, -1)}${
    //       e.target.value[e.target.value.length - 1]
    //     }`
    //   );
    // } else
    if (/=/g.test(currentTargetValue)) {
      return;
    } else if (/\s+/g.test(currentTargetValue)) {
      setexpression(`${currentTargetValue.replace(/\s+/gi, " ")}`);
    } else if (/([x^×/÷])[x^×/]+/gi.test(currentTargetValue)) {
      // setexpression(`${expression.replace(/([-+x×/÷])[-+x×/÷]+\1/gi, "$1")}`);
      return;
    } else {
      setexpression(currentTargetValue);
      console.log(`Current Target Value: ${currentTargetValue}`);
    }
  };

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
        ref={inputRef}
        name="expression"
        aria-label={"expression input"}
        onMouseDown={handleExpressionPress}
        expressionPressed={expressionPressed}
        value={expression}
        onChange={handleExpression}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
    </ExpressionContainer>
  );
};

export default Expression;
