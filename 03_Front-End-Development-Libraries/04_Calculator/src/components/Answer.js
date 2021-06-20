import styled from "styled-components";
import React, { useEffect } from "react";
import { CalculatorContext } from "./CalculatorBoard";
import { create, all } from "mathjs";

const config = {
  epsilon: 1e-12,
  matrix: "Matrix",
  number: "BigNumber",
  precision: 64,
  predictable: false,
  randomSeed: null,
};
const math = create(all, config);
const limitedEvaluate = math.evaluate;

math.import(
  {
    import: function () {
      throw new Error("Function import is disabled");
    },
    createUnit: function () {
      throw new Error("Function createUnit is disabled");
    },
    evaluate: function () {
      throw new Error("Function evaluate is disabled");
    },
    parse: function () {
      throw new Error("Function parse is disabled");
    },
    simplify: function () {
      throw new Error("Function simplify is disabled");
    },
    derivative: function () {
      throw new Error("Function derivative is disabled");
    },
  },
  { override: true }
);

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
  color: ${({ expression, currentScreenColor, equalPressed }) => {
    if (
      currentScreenColor === "white" &&
      (expression.length === 0 || equalPressed)
    ) {
      return "black";
    } else if (
      currentScreenColor === "black" &&
      (expression.length === 0 || equalPressed)
    ) {
      return "white";
    } else {
      return "#6c4f4f";
    }
  }};
  font-size: ${({ expression, equalPressed }) =>
    expression.length === 0 || equalPressed ? "40px" : "32px"};
  font-weight: ${({ expression, equalPressed }) =>
    expression.length === 0 || equalPressed ? "600" : "400"};
  border: 0;
  background: none;
  width: 100%;
  height: 100%;
  text-align: right;
  touch-action: manipulation;
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
    setequalPressed,
    currentTheme,
    seteasteregg,
    skinUnlocked,
  } = React.useContext(CalculatorContext);

  useEffect(() => {
    let newExpression = expression.replace(/X|x|×/g, "*").replace(/÷/g, "/");

    if (newExpression) {
      try {
        let currentAnswer = limitedEvaluate(newExpression);

        if (
          typeof currentAnswer !== "function" &&
          typeof currentAnswer !== "undefined"
        ) {
          setanswer(`${currentAnswer}`);
        }
      } catch (error) {
        if (
          /\bcalculon\b/gi.test(newExpression) &&
          skinUnlocked === "NOOOOoOO0O!"
        ) {
          seteasteregg(true);
        }
        if (/\bhal\b/gi.test(newExpression)) {
          setanswer(`Human Error`);
        } else if (
          /\bcalculon\b/gi.test(newExpression) &&
          skinUnlocked === "Dramatic...PAUSE!"
        ) {
          setanswer(`No! No, no, no. I don't do two takes`);
        } else {
          setanswer(`Error`);
        }
      }
    } else {
      setanswer("0");
    }
  }, [expression, setanswer, seteasteregg, skinUnlocked]);

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
        currentScreenColor={currentTheme.screen}
        readOnly
      />
    </AnswerContainer>
  );
};

export default Answer;
