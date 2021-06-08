import styled from "styled-components";
import React, { useEffect } from "react";
import { CalculatorContext } from "./CalculatorBoard";
import { evaluate, parse } from "mathjs";

const AnswerContainer = styled.div`
  margin: 0 15px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 94%;
  height: 60%;
`;

const AnswerExpression = styled.input`
  font-family: "Inter", sans-serif;
  color: ${(props) =>
    props.expression.length === 0 || props.equalPressed ? "black" : "#6c4f4f"};
  font-size: ${(props) =>
    props.expression.length === 0 || props.equalPressed ? "40px" : "32px"};
  font-weight: ${(props) =>
    props.expression.length === 0 || props.equalPressed ? "600" : "400"};
  border: 0;
  background: none;
  max-width: 100%;
  height: 100%;
  text-align: right;
  transition: all ease-out 0.07s;

  &:focus {
    outline: none;
    border: 0;
  }
`;

const Answer = () => {
  const {
    answer,
    setanswer,
    expression,
    expressionPressed,
    setexpressionPressed,
    equalPressed,
    scope,
    setequalPressed,
  } = React.useContext(CalculatorContext);

  useEffect(() => {
    let newExpression = expression
      .replace(/X|x|×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\s/g, "");

    if (newExpression) {
      try {
        parse(newExpression, scope);
        setanswer(`${evaluate(newExpression, scope)}`);
        console.log(scope);
      } catch (error) {
        console.log(error.message);
        if (
          !/[/*+\-=^]$/g.test(newExpression[newExpression.length - 1]) ||
          /([-+×÷])[-+×÷]+/gi.test(newExpression)
        ) {
          setanswer(`Error`);
        }

        // setanswer(`Error`);
      }
    } else {
      setanswer("0");
    }
  }, [expression, setanswer, scope]);

  const handleEqualPress = () => {
    if (expressionPressed === false) {
      setequalPressed(true);
    } else if (expressionPressed === true) {
      setequalPressed(true);
      setexpressionPressed(false);
    }
  };

  return (
    <AnswerContainer>
      <AnswerExpression
        name="answer"
        aria-label={"answer"}
        value={`=${answer}`}
        expression={expression}
        onMouseDown={handleEqualPress}
        equalPressed={equalPressed}
        readOnly
      />
    </AnswerContainer>
  );
};

export default Answer;
