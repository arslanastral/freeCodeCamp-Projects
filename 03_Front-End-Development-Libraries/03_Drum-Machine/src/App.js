import DrumMachine from "./components/DrumMachine";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <DrumMachine />
    </AppContainer>
  );
}

export default App;
