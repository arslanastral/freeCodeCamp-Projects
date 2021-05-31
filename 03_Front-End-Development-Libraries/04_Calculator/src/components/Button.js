import React from "react";
import styled from "styled-components";

const CalculatorButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  font-size: 33px;

  grid-area: ${(props) => props.gridarea};
  border: 0;
  padding: 0;
  border-radius: 40px;
  width: 63px;
  height: ${(props) => (props.gridarea === "equal" ? "100%" : "63px")};
  background-color: ${(props) => (props.gridarea === "equal" ? "yellow" : "")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all ease-in-out 0.07s;

  &:active {
    transform: scale(0.9);
  }
`;

const Button = ({ name, gridarea }) => {
  return <CalculatorButton gridarea={gridarea}>{name}</CalculatorButton>;
};

export default Button;
