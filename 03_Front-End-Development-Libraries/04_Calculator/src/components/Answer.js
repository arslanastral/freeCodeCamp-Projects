import styled from "styled-components";
import React, { useEffect } from "react";
import { CalculatorContext } from "./CalculatorBoard";
import { evaluate, parse } from "mathjs";

const AnswerContainer = styled.div`
  margin: 0px 10px 0px 0px;
  /* background: red; */
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
  text-align: right;
  width: 94%;
  height: 60%;
  font-family: "Inter", sans-serif;
  font-size: 45px;
`;

const AnswerExpression = styled.span`
  width: 100%;
  text-align: right;
`;

const Answer = () => {
  const { answer, setanswer, expression } = React.useContext(CalculatorContext);

  function isValidMathExpression(expr) {
    try {
      parse(expr);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    let scope = { a: 0, b: 0 };
    let newExpression = expression
      .replace(/X|x|×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\s/g, "");
    if (newExpression) {
      if (isValidMathExpression(newExpression)) {
        setanswer(`=${evaluate(newExpression, scope)}`);
      } else if (!isValidMathExpression(newExpression)) {
        setanswer(
          `=${evaluate(newExpression.replace(/[*)%(+-=]$/g, ""), scope)}`
        );
      } else {
        setanswer("Error");
      }
    } else {
      setanswer("0");
    }
  }, [expression, setanswer]);

  return (
    <AnswerContainer>
      <AnswerExpression>{answer}</AnswerExpression>
    </AnswerContainer>
  );
};

export default Answer;
