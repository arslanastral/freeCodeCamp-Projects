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
    if (/=/g.test(e.target.value)) {
      return;
    } else if (/\s/g.test(e.target.value)) {
      setexpression(`${e.target.value.replace(/\s/g, "")}`);
    } else if (/([-+x^×/÷])[-+x^×/]+/gi.test(e.target.value)) {
      // setexpression(`${expression.replace(/([-+x×/÷])[-+x×/÷]+\1/gi, "$1")}`);
      return;
    } else {
      setexpression(e.target.value);
      console.log(`Current Target Value: ${e.target.value}`);
    }
  };

  // .replace(/([-+×÷])[-+×÷]+\1/gi, "$1")

  const handleExpressionPress = () => {
    console.log(`Cursor Start Position: ${inputRef.current.selectionStart}`);
    console.log(`Cursor End Position: ${inputRef.current.selectionEnd}`);
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
        value={expression.replace(/[x*]/gi, "×").replace(/[/]/g, "÷")}
        onChange={handleExpression}
      />
    </ExpressionContainer>
  );
};

export default Expression;
