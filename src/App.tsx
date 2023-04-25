import styled from "styled-components";
import InputCpfCnpj from "./Components/InputCpfCnpj";
import InputCelular from "./Components/InputCelular";

function App() {
  return (
    <Page>
      <Container>
        <InputCpfCnpj />
      </Container>
      <Container>
        <InputCelular />
      </Container>
    </Page>
  );
}

export default App;

const Page = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 5em;
  background-color: #0c6b9f;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
  width: 400px;
  border: 1px solid #000;
  border-radius: 15px;  

  &:hover {
    background-color: #0c6b99;
  }
`;
