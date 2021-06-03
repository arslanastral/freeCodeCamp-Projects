import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const CalculatorButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  font-size: 33px;
  user-select: none;
  grid-area: ${(props) => props.gridarea};
  border: 0;
  padding: 0;
  border-radius: 40px;
  width: 63px;
  height: ${(props) => (props.gridarea === "equal" ? "100%" : "63px")};
  background-color: ${(props) => (props.gridarea === "equal" ? "yellow" : "")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all ease-out 0.07s;

  &:active {
    transform: scale(0.9);
  }
`;

const Button = ({ name, gridarea }) => {
  const { setexpression, expression } = React.useContext(CalculatorContext);
  let icon;

  if (name === "CE") {
    icon = (
      <svg
        width="31"
        height="25"
        viewBox="0 0 31 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7631 18.9975L18.8906 13.87L24.0182 18.9975L25.3881 17.6275L20.2606 12.5L25.3881 7.37247L24.0182 6.00253L18.8906 11.13L13.7631 6.00253L12.3932 7.37247L17.5206 12.5L12.3932 17.6275L13.7631 18.9975Z"
          fill="black"
        />
        <path
          d="M28.5781 0.875H11.7851C11.5877 0.875327 11.3925 0.915698 11.2112 0.993669C11.0299 1.07164 10.8663 1.18559 10.7304 1.32862L0.96875 11.6295V13.3705L10.7304 23.6714C10.8663 23.8144 11.0299 23.9284 11.2112 24.0063C11.3925 24.0843 11.5877 24.1247 11.7851 24.125H28.5781C28.9634 24.1246 29.3327 23.9713 29.6051 23.6989C29.8776 23.4265 30.0308 23.0571 30.0312 22.6719V2.32812C30.0308 1.94287 29.8776 1.57352 29.6051 1.30111C29.3327 1.02869 28.9634 0.875449 28.5781 0.875ZM28.0938 22.1875H11.9934L2.90625 12.5983V12.4017L11.9934 2.8125H28.0938V22.1875Z"
          fill="black"
        />
      </svg>
    );
  } else {
    icon = name;
  }

  // .replace(/\s/g, "")
  //         .replace(/([-+×÷])[-+×÷]+/gi, "$1")

  const handleMouseDown = () => {
    if (expression.length === 0 && /[×^+÷!\-=.]/g.test(name)) {
      setexpression(`0${name}`);
      // Do not repeat operator
    } else if (name === "CE") {
      setexpression(expression.substring(0, expression.length - 1).trim());
    } else if (
      /[×÷+\-!^]/g.test(expression[expression.length - 1]) &&
      !/[0-9]/g.test(name)
    ) {
      setexpression(`${expression.slice(0, -1)}${name}`);
    } else {
      setexpression(`${expression}${name}`);
    }
  };

  return (
    <CalculatorButton onMouseDown={handleMouseDown} gridarea={gridarea}>
      {icon}
    </CalculatorButton>
  );
};

export default Button;
