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
  color: ${({ expressionPressed, currentScreenColor }) => {
    if (currentScreenColor === "black" && expressionPressed) {
      return "white";
    } else if (currentScreenColor === "white" && expressionPressed) {
      return "black";
    } else {
      return "#6c4f4f";
    }
  }};
  font-size: ${(props) => (props.expressionPressed ? "40px" : "32px")};
  font-weight: ${(props) => (props.expressionPressed ? "600" : "400")};
  background: none;
  border: 0;
  max-width: 100%;
  text-align: right;
  touch-action: manipulation;
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
    currentTheme,
    isinputReadOnly,
    setisinputReadOnly,
  } = React.useContext(CalculatorContext);

  const handleExpression = (e) => {
    let caret = e.target.selectionStart;
    let element = e.target;

    window.requestAnimationFrame(() => {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });
    let currentTargetValue = e.target.value
      .replace(/[x*]/gi, "×")
      .replace(/[/]/g, "÷")
      .replace(/[\s]{2,}/g, "  ");

    setexpression(currentTargetValue);
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
        currentScreenColor={currentTheme.screen}
        {...(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        )
          ? {
              readOnly: isinputReadOnly,
              onDoubleClick: () => setisinputReadOnly(false),
              onBlur: () => setisinputReadOnly(true),
            }
          : {})}
      />
    </ExpressionContainer>
  );
};

export default Expression;
