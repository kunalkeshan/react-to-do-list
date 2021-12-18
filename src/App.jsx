import React, {useState} from "react";
import "./App.css";
import styled from "styled-components";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const Container = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;

`

function App() {

  const [theme, setTheme] = useState("light");

  return (
    <Container>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </Container>
  );

}

export default App;
