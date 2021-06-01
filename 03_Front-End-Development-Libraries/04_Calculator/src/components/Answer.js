import styled from "styled-components";
import React from "react";

const AnswerContainer = styled.div`
  margin: 0px 10px 0px 0px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 94%;
  height: 50%;
  font-family: "Inter", sans-serif;
  font-size: 43px;
`;

const Answer = () => {
  return <AnswerContainer>{"=0"}</AnswerContainer>;
};

export default Answer;
