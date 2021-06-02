/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState } from "react";
import HistoryButton from "./HistoryButton";
import RecentCalculations from "./RecentCalculations";
import Expression from "./Expression";
import Answer from "./Answer";

const ScreenContainer = styled.div`
  background-color: white;
  border-radius: 18px;
  margin: 80px auto 0px auto;
  width: 442px;
  height: 166px;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
`;

const HistoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45%;
`;

const CalculationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 55%;
`;

const Screen = () => {
  return (
    <ScreenContainer>
      <HistoryWrapper>
        <HistoryButton />
        <RecentCalculations />
      </HistoryWrapper>
      <CalculationsWrapper>
        <Expression />
        <Answer />
      </CalculationsWrapper>
    </ScreenContainer>
  );
};

export default Screen;
