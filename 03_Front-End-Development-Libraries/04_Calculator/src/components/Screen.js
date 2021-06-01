import styled from "styled-components";
import React from "react";
import HistoryButton from "./HistoryButton";
import RecentCalculations from "./RecentCalculations";
import Expression from "./Expression";
import Answer from "./Answer";

const ScreenContainer = styled.div`
  background-color: white;
  border-radius: 18px;
  margin: 80px auto 0px auto;
  width: 342px;
  height: 166px;
  box-shadow: inset 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
`;

const HistoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`;

const CalculationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 60%;
`;

const Screen = () => {
  // const [expression, setexpression] = useState("");

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
