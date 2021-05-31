import styled from "styled-components";
import React from "react";

const ScreenContainer = styled.div`
  background-color: white;
  border-radius: 18px;
  margin: 80px auto 0px auto;
  width: 342px;
  height: 166px;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
`;

const Screen = () => {
  return <ScreenContainer></ScreenContainer>;
};

export default Screen;
