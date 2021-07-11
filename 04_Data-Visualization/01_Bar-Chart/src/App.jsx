import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return <AppContainer>Hello!</AppContainer>;
}

export default App;
