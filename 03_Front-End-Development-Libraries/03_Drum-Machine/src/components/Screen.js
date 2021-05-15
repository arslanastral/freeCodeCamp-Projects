import React from "react";
import DisplayScreen from "./DisplayScreen";
import Selector from "./Selector";
import Octaves from "./Octaves";
import styled from "styled-components";

const ScreenContainer = styled.div`
  width: 295px;
`;

const Screen = () => {
  return (
    <ScreenContainer>
      <DisplayScreen />
      <Selector />
      <Octaves />
    </ScreenContainer>
  );
};

export default Screen;
