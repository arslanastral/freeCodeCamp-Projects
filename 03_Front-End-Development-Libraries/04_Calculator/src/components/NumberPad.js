import styled, { css } from "styled-components";
import React from "react";
import { CalculatorContext } from "./CalculatorBoard";
import "animate.css";
import Button from "./Button";

const EXPANDED_GRID_NAMES = `
"allclear log degreeradian pi numbere"
"cos sin tan inverse divide"
"squareroot leftparan rightparan dot multiply"
"factorial one two three plus"
"mod four five six minus"
"xpowery seven eight nine equal"
"expand ans zero clearentry equal";
`;
const DEFAULT_GRID_NAMES = `
"leftparan rightparan dot divide"
"one two three multiply"
"four five six plus"
"seven eight nine minus"
"expand zero clearentry equal";
`;

const NumpadContainer = styled.div`
  display: grid;
  margin-top: 20px;
  justify-content: center;
  grid-column-gap: ${(props) => (props.isExpanded ? "20px" : "18px")};
  grid-row-gap: ${(props) => (props.isExpanded ? "12px" : "20px")};
  grid-template-columns: ${(props) =>
    props.isExpanded
      ? "repeat(4, minmax(0, 47px))"
      : "repeat(4, minmax(0, 63px))"};
  grid-template-areas: ${(props) =>
    props.isExpanded
      ? css`
          ${EXPANDED_GRID_NAMES}
        `
      : css`
          ${DEFAULT_GRID_NAMES}
        `};

  animation: ${(props) => (props.isExpanded ? "fadeInUp" : "zoomIn")};
  animation-duration: 0.4s;
`;

const NumberPad = () => {
  const { isExpanded, isInverseToggled } = React.useContext(CalculatorContext);

  let DEFAULT_GRID_AREA = {
    "(": "leftparan",
    ")": "rightparan",
    "÷": "divide",
    "×": "multiply",
    1: "one",
    2: "two",
    3: "three",
    "+": "plus",
    4: "four",
    5: "five",
    6: "six",
    "-": "minus",
    7: "seven",
    8: "eight",
    9: "nine",
    ex: "expand",
    0: "zero",
    ".": "dot",
    CE: "clearentry",
    "=": "equal",
  };

  let EXPANDED_GRID_AREA = {
    ...DEFAULT_GRID_AREA,
    C: "allclear",
    "!": "factorial",
    "%": "mod",
    "^": "xpowery",
    A: "ans",
    "sqrt(": "squareroot",
    [isInverseToggled ? "log10(" : "log("]: "log",
    pi: "pi",
    e: "numbere",
    [isInverseToggled ? "acos(" : "cos("]: "cos",
    [isInverseToggled ? "asin(" : "sin("]: "sin",
    [isInverseToggled ? "atan(" : "tan("]: "tan",
    inv: "inverse",
    deg: "degreeradian",
  };

  let GRID_AREA = isExpanded ? EXPANDED_GRID_AREA : DEFAULT_GRID_AREA;

  return (
    <NumpadContainer
      key={Object.entries(GRID_AREA).length}
      isExpanded={isExpanded}
    >
      {Object.entries(GRID_AREA).map((keys, i) => (
        <Button key={i} name={keys[0]} gridarea={keys[1]} />
      ))}
    </NumpadContainer>
  );
};

export default NumberPad;
