import styled from "styled-components";
import React, { useEffect } from "react";
import { CalculatorContext } from "./CalculatorBoard";
import { evaluate, parse } from "mathjs";

const AnswerContainer = styled.div`
  margin: 2px 15px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 94%;
  height: 60%;
`;

const AnswerExpression = styled.span`
  font-family: "Inter", sans-serif;
  color: ${(props) =>
    props.expression.length === 0 || props.equalPressed ? "black" : "#333"};
  font-size: ${(props) =>
    props.expression.length === 0 || props.equalPressed ? "42px" : "32px"};
  width: 100%;
  text-align: right;
  transition: all ease-out 0.07s;
`;

const Answer = () => {
  const {
    answer,
    setanswer,
    expression,
    expressionPressed,
    setexpressionPressed,
    equalPressed,
    setequalPressed,
  } = React.useContext(CalculatorContext);

  useEffect(() => {
    // let scope = {};
    let newExpression = expression
      .replace(/X|x|×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\s/g, "");

    if (newExpression) {
      try {
        parse(newExpression);
        setanswer(`=${evaluate(newExpression)}`);
      } catch (error) {
        if (
          /[/*+\-=^]$/g.test(newExpression[newExpression.length - 1]) &&
          !/([-+×÷])[-+×÷]+/gi.test(newExpression)
        ) {
          setanswer(
            `=${evaluate(newExpression.replace(/[/*)%(+\-=^]$/g, ""))}`
          );
        } else {
          setanswer(`Error`);
        }

        // setanswer(`Error`);
      }
    } else {
      setanswer("0");
    }
  }, [expression, setanswer]);

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
        expression={expression}
        onClick={handleEqualPress}
        equalPressed={equalPressed}
      >
        {answer}
      </AnswerExpression>
    </AnswerContainer>
  );
};

export default Answer;
