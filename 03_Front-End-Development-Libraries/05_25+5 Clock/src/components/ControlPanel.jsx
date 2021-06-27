import React from "react";
import styled from "styled-components";
import Start from "./buttons/Start";
import Reset from "./buttons/Reset";
import Settings from "./buttons/Settings";

const ControlPanelWrapper = styled.div`
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 202px;
  height: 46px;
  background: #ffffff;
  border-radius: 47px;
`;

const ControlPanel = () => {
  return (
    <ControlPanelWrapper>
      <ControlPanelContainer>
        <Start />
        <Reset />
        <Settings />
      </ControlPanelContainer>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
