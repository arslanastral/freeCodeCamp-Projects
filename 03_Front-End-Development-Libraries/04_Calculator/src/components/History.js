import styled from "styled-components";
import React from "react";
import { CalculatorContext } from "./CalculatorBoard";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.03);
  width: 100%;
  height: 61%;
  bottom: 0px;
  /* display: ${(props) => (props.isHistoryToggled ? "" : "none")}; */
  visibility: ${(props) => (props.isHistoryToggled ? "visible" : "hidden")};
  position: absolute;
  animation: ${(props) =>
    props.isHistoryToggled ? "fadeInUp" : "fadeOutDown"};
  animation-duration: 0.3s;
  overflow: auto;
  scrollbar-color: #f0f0f0 white;
`;

const HistoryItem = styled.button`
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  padding: 0;
  background: none;
  border: 0.2px solid blue;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  color: #333;
`;

const HistoryItemContainer = styled.div`
  /* margin-bottom: 5px; */
  margin: 10px 0px 5px 15px;
`;

const History = () => {
  const {
    isHistoryToggled,
    history,
    answer,
    expression,
    setexpression,
    setanswer,
  } = React.useContext(CalculatorContext);

  const handleHistoryExpressionClick = (expr) => {
    if (expr !== expression) {
      setexpression(expression);
    }
  };

  const handleHistoryAnswerClick = (ans) => {
    if (ans !== answer) {
      setanswer(ans);
    }
  };

  return (
    <HistoryContainer
      key={isHistoryToggled.toString()}
      isHistoryToggled={isHistoryToggled}
    >
      {" "}
      {history.map((calc, i) => (
        <HistoryItemContainer key={i}>
          <HistoryItem
            onMouseDown={() => handleHistoryExpressionClick(calc.expression)}
          >
            {calc.expression}
          </HistoryItem>{" "}
          <span>{` = `}</span>
          <HistoryItem
            onMouseDown={() => handleHistoryAnswerClick(calc.answer)}
          >
            {" "}
            {calc.answer}
          </HistoryItem>
        </HistoryItemContainer>
      ))}
    </HistoryContainer>
  );
};

export default History;
