import React from "react";
import styled from "styled-components";

const ExpressionContainer = styled.div`
  margin: 0px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* background: green; */
  height: 50%;
  width: 94%;
  font-family: "Inter", sans-serif;
  font-size: 40px;
`;

const Expression = () => {
  return <ExpressionContainer>{"10 + 9"}</ExpressionContainer>;
};

export default Expression;
