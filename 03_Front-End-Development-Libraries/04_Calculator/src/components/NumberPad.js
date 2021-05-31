import styled from "styled-components";
import React from "react";
import Button from "./Button";

const NumpadContainer = styled.div`
  display: grid;
  margin-top: 20px;
  /* align-content: center; */
  justify-content: center;
  grid-column-gap: 18px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 63px));
  /* grid-template-rows: repeat(5, minmax(0, 1fr)); */
  grid-template-areas:
    "leftparan rightparan divide multiply"
    "one two three plus"
    "four five six minus"
    "seven eight nine equal"
    "dot zero clearentry equal";
`;

const NumberPad = () => {
  let GRID_AREA = {
    "(": "leftparan",
    ")": "rightparan",
    "/": "divide",
    x: "multiply",
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
