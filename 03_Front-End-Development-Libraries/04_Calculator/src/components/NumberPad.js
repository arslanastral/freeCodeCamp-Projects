import styled from "styled-components";
import React from "react";
import Button from "./Button";

const NumpadContainer = styled.div`
  display: grid;
  margin-top: 20px;
  justify-content: center;
  grid-column-gap: 18px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 63px));
  grid-template-areas:
    "allclear leftparan rightparan divide multiply"
    "factorial one two three plus"
    "mod four five six minus"
    "xpowery seven eight nine equal"
    "ans dot zero clearentry equal";
`;

const NumberPad = () => {
  let GRID_AREA = {
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
    "=": "equal",
    ".": "dot",
    0: "zero",
    CE: "clearentry",
    AC: "allclear",
    "!": "factorial",
    "%": "mod",
    xʸ: "xpowery",
    A: "ans",
  };

  return (
    <NumpadContainer>
      {Object.entries(GRID_AREA).map((keys, i) => (
        <Button key={i} name={keys[0]} gridarea={keys[1]} />
      ))}
    </NumpadContainer>
  );
};

export default NumberPad;
