import React from "react";
import styled from "styled-components";
import ClockBoard from "./components/ClockBoard";

const AppContainer = styled.div`
  background: linear-gradient(
    180deg,
    #162efc 6.25%,
    rgba(22, 46, 252, 0.67) 100%
  );
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const App = () => {
  return (
    <AppContainer>
      <ClockBoard />
    </AppContainer>
  );
};

export default App;
