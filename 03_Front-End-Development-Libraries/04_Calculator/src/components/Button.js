import React from "react";
import styled from "styled-components";
import { IoBackspaceOutline } from "react-icons/io5";
import { BiLayerPlus } from "react-icons/bi";
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
  height: ${({ isExpanded, gridarea }) => {
    if (gridarea === "equal") {
      return "100%";
    } else if (isExpanded) {
      return "47px";
    } else {
      return "63px";
    }
  }};
  background-color: ${(props) => (props.gridarea === "equal" ? "yellow" : "")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all ease-out 0.05s;

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
    inputRef,
    isInverseToggled,
    setisInverseToggled,
  } = React.useContext(CalculatorContext);

  let icon;

  if (name === "CE") {
    icon = <IoBackspaceOutline style={{ marginTop: "7px" }} color={"black"} />;
  } else if (name === "ex") {
    icon = <BiLayerPlus style={{ marginTop: "7px" }} color={"blue"} />;
  } else if (name === "!") {
    icon = "𝑥!";
  } else if (name === "^") {
    icon = "𝑥ʸ";
  } else if (gridarea === "log") {
    icon = (
      <span style={{ fontSize: "0.72em" }}>
        {isInverseToggled ? "㏒₁₀" : "㏒"}
      </span>
    );
  } else if (name === "pi") {
    icon = "π";
  } else if (name === "e") {
    icon = "𝑒";
  } else if (name === "sqrt(") {
    icon = "√";
  } else if (gridarea === "cos") {
    icon = (
      <span style={{ fontSize: "0.72em" }}>
        {isInverseToggled ? "cos⁻¹" : "cos"}
      </span>
    );
  } else if (gridarea === "sin") {
    icon = (
      <span style={{ fontSize: "0.72em" }}>
        {isInverseToggled ? "sin⁻¹" : "sin"}
      </span>
    );
  } else if (gridarea === "tan") {
    icon = (
      <span style={{ fontSize: "0.72em" }}>
        {isInverseToggled ? "tan⁻¹" : "tan"}
      </span>
    );
  } else if (name === "inv") {
    icon = "𝑓⁻¹";
  } else if (name === "deg") {
    icon = <span style={{ fontSize: "0.72em" }}>deg</span>;
  } else {
    icon = name;
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (expression.length === 0 && /[×^÷!\\.]/g.test(name)) {
      setexpression(`0${name}`);
    } else if (name === "CE") {
      handleBackSpace();
    } else if (name === "C") {
      setexpression("");
      setanswer("0");
      sethistory([]);
    } else if (name === "inv") {
      isInverseToggled ? setisInverseToggled(false) : setisInverseToggled(true);
    } else if (name === "=") {
      setequalPressed(true);
      setexpressionPressed(false);
      handleHistory();
    } else if (name === "ex") {
      isExpanded ? setisExpanded(false) : setisExpanded(true);
    } else if (name === "A") {
      if (history.length >= 1) {
        setexpression(`${expression}${history[history.length - 1].answer}`);
      }
    } else if (
      /[÷+\-^%]/g.test(expression[inputRef.current.selectionStart - 1]) &&
      !equalPressed &&
      !/[a-z0-9]/gi.test(name)
    ) {
      setexpression(
        `${
          expression.substring(0, inputRef.current.selectionStart - 1) +
          name +
          expression.substring(inputRef.current.selectionStart)
        }`
      );
    } else {
      setexpression(
        `${
          equalPressed
            ? name
            : `${
                expression.substring(0, inputRef.current.selectionStart) +
                name +
                expression.substring(inputRef.current.selectionEnd)
              }`
        }`
      );
      moveInputCaretToEnd(inputRef.current);
      setexpressionPressed(true);
      setequalPressed(false);
    }
  };

  const moveInputCaretToEnd = (el) => {
    if (typeof el.selectionStart == "number") {
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  };

  const handleHistory = () => {
    if (expression && answer !== 0 && answer !== "Error") {
      if (history.length >= 1) {
        if (
          expression !== history[history.length - 1].expression &&
          answer !== history[history.length - 1].answer
        ) {
          sethistory([...history, { expression: expression, answer: answer }]);
        }
      } else {
        sethistory([...history, { expression: expression, answer: answer }]);
      }
    }
  };

  const handleBackSpace = () => {
    setequalPressed(false);
    setexpressionPressed(true);
    if (
      inputRef.current.selectionStart === inputRef.current.selectionEnd &&
      inputRef.current.selectionStart === inputRef.current.value.length
    ) {
      setexpression(
        expression.substring(0, inputRef.current.selectionStart - 1).trim()
      );
    } else if (
      inputRef.current.selectionStart === inputRef.current.selectionEnd &&
      inputRef.current.selectionStart !== inputRef.current.value.length
    ) {
      setexpression(
        expression.substring(0, inputRef.current.selectionStart - 1) +
          expression.substring(inputRef.current.selectionEnd)
      );
    } else {
      setexpression(
        expression.substring(0, inputRef.current.selectionStart) +
          expression.substring(inputRef.current.selectionEnd)
      );
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
