import React from "react";
import DisplayScreen from "./DisplayScreen";
import styled from "styled-components";

const ScreenContainer = styled.div`
  grid-area: screen;
  /* background-color: yellow; */
`;

const Screen = () => {
  return (
    <ScreenContainer>
      <DisplayScreen />
    </ScreenContainer>
  );
};

export default Screen;
