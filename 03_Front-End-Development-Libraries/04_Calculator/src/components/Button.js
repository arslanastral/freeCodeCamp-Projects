import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const CalculatorButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap");
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isExpanded ? "23px" : "33px")};
  user-select: none;
  grid-area: ${(props) => props.gridarea};
  border: 0;
  padding: 0;
  border-radius: 40px;
  width: ${(props) => (props.isExpanded ? "47px" : "63px")};
  height: ${(props) => (props.isExpanded ? "47px" : "63px")};
  background-color: ${(props) => (props.gridarea === "equal" ? "yellow" : "")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all ease-out 0.07s;

  &:active {
    transform: scale(0.9);
  }
`;

const Button = ({ name, gridarea }) => {
  const {
    setexpression,
    expression,
    setanswer,
    answer,
    setequalPressed,
    setexpressionPressed,
    isExpanded,
    setisExpanded,
    equalPressed,
    history,
    sethistory,
  } = React.useContext(CalculatorContext);
  let icon;

  if (name === "CE") {
    icon = (
      <svg
        width={isExpanded ? "21" : "31"}
        height={isExpanded ? "15" : "21"}
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
  } else if (name === "ex") {
    icon = (
      <svg
        width={isExpanded ? "17" : "27"}
        height={isExpanded ? "20" : "30"}
        viewBox="0 0 27 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 20.4416V9.33048C25.9995 8.84337 25.8709 8.36494 25.6271 7.94321C25.3834 7.52148 25.033 7.17127 24.6111 6.92771L14.8889 1.37215C14.4666 1.12835 13.9876 1 13.5 1C13.0124 1 12.5334 1.12835 12.1111 1.37215L2.38889 6.92771C1.96703 7.17127 1.61664 7.52148 1.37286 7.94321C1.12909 8.36494 1.0005 8.84337 1 9.33048V20.4416C1.0005 20.9287 1.12909 21.4071 1.37286 21.8289C1.61664 22.2506 1.96703 22.6008 2.38889 22.8444L12.1111 28.3999C12.5334 28.6437 13.0124 28.7721 13.5 28.7721C13.9876 28.7721 14.4666 28.6437 14.8889 28.3999L24.6111 22.8444C25.033 22.6008 25.3834 22.2506 25.6271 21.8289C25.8709 21.4071 25.9995 20.9287 26 20.4416Z"
          stroke="blue"
          fill="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.375 7.88605L13.5 14.8999L25.625 7.88605"
          stroke="blue"
          fill="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 28.886V14.886"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (name === "!") {
    icon = "𝑥!";
  } else if (name === "^") {
    icon = "𝑥ʸ";
  } else if (name === "log(") {
    icon = "㏒";
  } else if (name === "cos(") {
    icon = <span style={{ fontSize: "20px" }}>cos</span>;
  } else if (name === "sin(") {
    icon = <span style={{ fontSize: "20px" }}>sin</span>;
  } else if (name === "tan(") {
    icon = <span style={{ fontSize: "20px" }}>tan</span>;
  } else if (name === "inv") {
    icon = <span style={{ fontSize: "20px" }}>Inv</span>;
  } else if (name === "rad") {
    icon = <span style={{ fontSize: "20px" }}>rad</span>;
  } else {
    icon = name;
  }

  // .replace(/\s/g, "")
  //         .replace(/([-+×÷])[-+×÷]+/gi, "$1")

  const handleMouseDown = () => {
    if (expression.length === 0 && /[×^+÷!\-.]/g.test(name)) {
      setexpression(`0${name}`);
      // Do not repeat operator
    } else if (name === "CE") {
      setexpression(expression.substring(0, expression.length - 1).trim());
    } else if (name === "C") {
      setexpression("");
      setanswer("0");
    } else if (name === "=") {
      setequalPressed(true);
      setexpressionPressed(false);
      if (expression && answer !== 0 && answer !== "Error") {
        if (history.length >= 1) {
          if (
            expression !== history[history.length - 1].expression &&
            answer !== history[history.length - 1].answer
          ) {
            sethistory([
              ...history,
              { expression: expression, answer: answer },
            ]);
          }
        } else {
          sethistory([...history, { expression: expression, answer: answer }]);
        }
      }
      console.log(history);
    } else if (name === "ex") {
      isExpanded ? setisExpanded(false) : setisExpanded(true);
    } else if (name === "A") {
      if (history.length >= 1) {
        setexpression(history[history.length - 1].answer);
      }
    } else if (
      /[÷+\-!×^%]/g.test(expression[expression.length - 1]) &&
      !equalPressed &&
      !/[0-9]/g.test(name)
    ) {
      setexpression(`${expression.slice(0, -1)}${name}`);
    } else {
      setexpression(`${equalPressed ? name : `${expression}${name}`}`);
      setexpressionPressed(true);
      setequalPressed(false);

      console.log(expression);
    }
  };

  return (
    <CalculatorButton
      isExpanded={isExpanded}
      onMouseDown={handleMouseDown}
      gridarea={gridarea}
      aria-label={`${gridarea} button`}
    >
      {icon}
    </CalculatorButton>
  );
};

export default Button;
