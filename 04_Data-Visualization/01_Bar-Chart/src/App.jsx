import React from "react";
import styled from "styled-components";
import BarChart from "./components/BarChart";

const AppContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <BarChart />
    </AppContainer>
  );
}

export default App;
