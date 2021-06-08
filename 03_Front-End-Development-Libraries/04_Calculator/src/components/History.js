import styled from "styled-components";
import React from "react";
import { CalculatorContext } from "./CalculatorBoard";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.03);
  border-radius: 18px;
  width: 100%;
  height: 61%;
  bottom: 4px;
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
  border: 1px solid #dfe1e5;
  border-radius: 4px;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  color: #1a73e8;

  &:hover {
    background-color: rgba(60, 64, 67, 0.04);
  }
`;

const HistoryItemContainer = styled.div`
  /* margin-bottom: 5px; */
  margin: 10px 0 5px 15px;
`;

const Equals = styled.span`
  margin: 0px 5px 0px 5px;
  font-family: "Inter", sans-serif;
  color: #666b70;
`;

const History = () => {
  const {
    isHistoryToggled,
    history,
    expression,
    setexpression,
    setexpressionPressed,
    setisHistoryToggled,
    setequalPressed,
  } = React.useContext(CalculatorContext);

  const handleHistoryClick = (expr) => {
    if (expr !== expression) {
      setexpression(expr);
      setexpressionPressed(true);
      setequalPressed(false);
      setisHistoryToggled(false);
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
          <HistoryItem onMouseDown={() => handleHistoryClick(calc.expression)}>
            {calc.expression}
          </HistoryItem>{" "}
          <Equals>{` = `}</Equals>
          <HistoryItem onMouseDown={() => handleHistoryClick(calc.answer)}>
            {" "}
            {calc.answer}
          </HistoryItem>
        </HistoryItemContainer>
      ))}
    </HistoryContainer>
  );
};

export default History;
