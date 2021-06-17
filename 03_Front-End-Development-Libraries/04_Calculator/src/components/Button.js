import React from "react";
import styled from "styled-components";
import { IoBackspaceOutline } from "react-icons/io5";
import { BiLayerPlus } from "react-icons/bi";
import { CalculatorContext } from "./CalculatorBoard";

const CalculatorButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap");
  font-family: "Inter", sans-serif;
  font-size: ${({ isExpanded }) => (isExpanded ? "23px" : "33px")};
  user-select: none;
  grid-area: ${({ gridarea }) => gridarea};
  border: 0;
  padding: 0;
  color: ${({ gridarea, currentButtonColor }) => {
    if (currentButtonColor === "black" && gridarea !== "equal") {
      return "white";
    } else {
      return "black";
    }
  }};
  border-radius: ${({ gridarea }) => (gridarea === "equal" ? "40px" : "50%")};
  cursor: pointer;
  width: ${({ isExpanded }) => (isExpanded ? "47px" : "63px")};
  height: ${({ isExpanded, gridarea }) => {
    if (gridarea === "equal") {
      return "100%";
    } else if (isExpanded) {
      return "47px";
    } else {
      return "63px";
    }
  }};
  background-color: ${({ gridarea, currentButtonColor }) =>
    gridarea === "equal" ? "yellow" : currentButtonColor};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all ease-out 0.08s;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background: ${({ gridarea }) => (gridarea === "allclear" ? "red" : "")};
    color: ${({ gridarea }) => (gridarea === "allclear" ? "white" : "")};
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
    currentTheme,
  } = React.useContext(CalculatorContext);

  let icon;

  if (name === "CE") {
    icon = (
      <IoBackspaceOutline
        style={{ marginTop: "7px" }}
        color={currentTheme.button === "black" ? "white" : "black"}
      />
    );
  } else if (name === "ex") {
    icon = <BiLayerPlus style={{ marginTop: "7px" }} color={"blue"} />;
  } else if (name === "!") {
    icon = "𝑥!";
  } else if (name === "^") {
    icon = "𝑥ʸ";
  } else if (gridarea === "log") {
    icon = (
      <span style={{ fontSize: "0.72em" }}>
        {isInverseToggled ? "log₁₀" : "log"}
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

  const handleMouseDown = () => {
    let [text, start, end, input] = caretPosition(inputRef.current);
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
      inputRef.current.blur();
      setequalPressed(true);
      setexpressionPressed(false);
      handleHistory();
    } else if (name === "ex") {
      isExpanded ? setisExpanded(false) : setisExpanded(true);
    } else if (name === "A") {
      if (history.length >= 1) {
        setexpression(`${expression}${history[history.length - 1].answer}`);
      }
    } else {
      let before = text.substring(0, start);
      let after = text.substring(end, text.length);
      input.value = `${equalPressed ? name : `${before + name + after}`}`; //Fixes caret jumping because of react state being async.
      setexpression(`${equalPressed ? name : `${before + name + after}`}`);
      input.focus();
      start = end = start + name.length;
      input.setSelectionRange(start, end);
      setexpressionPressed(true);
      setequalPressed(false);
    }
  };

  const handleHistory = () => {
    if (expression && answer !== 0 && answer !== "Error") {
      if (history.length >= 1) {
        if (expression !== history[history.length - 1].expression) {
          sethistory([
            ...history,
            { expression: expression.replace(/\s/g, ""), answer: answer },
          ]);
        }
      } else {
        sethistory([
          ...history,
          { expression: expression.replace(/\s/g, ""), answer: answer },
        ]);
      }
    }
  };

  const handleBackSpace = () => {
    let [text, start, end, input] = caretPosition(inputRef.current);
    setequalPressed(false);
    setexpressionPressed(true);

    if (start === end && start === text.length) {
      input.value = text.substring(0, start - 1).trim();
      setexpression(text.substring(0, start - 1).trim());
    } else if (start === end && start !== text.length) {
      input.value = text.substring(0, start - 1) + text.substring(end);
      setexpression(text.substring(0, start - 1) + text.substring(end));
      input.focus();
      start = end = start - 1;
      input.setSelectionRange(start, end);
    } else {
      input.value = text.substring(0, start) + text.substring(end);
      setexpression(text.substring(0, start) + text.substring(end));
      input.focus();
      start = end = start;
      input.setSelectionRange(start, end);
    }
  };

  const caretPosition = (inputRef) => {
    let input = inputRef;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let text = input.value;

    return [text, start, end, input];
  };

  return (
    <CalculatorButton
      isExpanded={isExpanded}
      onMouseDown={handleMouseDown}
      currentButtonColor={currentTheme.button}
      onMouseUp={() => inputRef.current.focus()}
      gridarea={gridarea}
      aria-label={`${gridarea} button`}
    >
      {icon}
    </CalculatorButton>
  );
};

export default Button;
