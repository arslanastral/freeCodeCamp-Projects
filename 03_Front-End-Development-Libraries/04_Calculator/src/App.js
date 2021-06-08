import styled from "styled-components";
import CalculatorBoard from "./components/CalculatorBoard";
const AppContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <CalculatorBoard />
    </AppContainer>
  );
}

export default App;
