import styled from "styled-components";
import React from "react";
import { CalculatorContext } from "./CalculatorBoard";

const HistoryContainer = styled.div`
  display: ${(props) => (props.isHistoryToggled ? "flex" : "none")};
  flex-direction: column;
  background: white;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.03);
  border-radius: 18px;
  width: 100%;
  height: 61%;
  bottom: 4px;
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

const HistoryEmptyIndicator = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #70757a;
  margin: 20px 10px 0px 25px;
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
    <HistoryContainer isHistoryToggled={isHistoryToggled}>
      {history.length === 0 ? (
        <HistoryEmptyIndicator>
          Nothing here yet. Make some calculations & your results will appear
          here when you hit equal which you can reuse later.
        </HistoryEmptyIndicator>
      ) : (
        history.map((calc, i) => (
          <HistoryItemContainer key={i}>
            <HistoryItem
              onMouseDown={() => handleHistoryClick(calc.expression)}
            >
              {calc.expression}
            </HistoryItem>{" "}
            <Equals>{` = `}</Equals>
            <HistoryItem onMouseDown={() => handleHistoryClick(calc.answer)}>
              {" "}
              {calc.answer}
            </HistoryItem>
          </HistoryItemContainer>
        ))
      )}
    </HistoryContainer>
  );
};

export default History;
