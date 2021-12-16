import React from "react";
import "./App.css";
import styled from "styled-components";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";

const Container = styled.div`
  
`

function App() {

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );

}

export default App;
