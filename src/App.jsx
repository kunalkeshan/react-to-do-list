import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Header from './components/Header/Header';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import TaskList from './components/TaskList/TaskList';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --bg-nav: ;
    --bg-main: ;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito', sans-serif;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

function App() {
  const [allTasks, setAllTasks] = useState({})

  useEffect(() => {
    
  }, [allTasks])

  return (
    <Container>
      <Header />
      <main>
        <AddTaskInput updateTasks={setAllTasks} />
        <TaskList tasks={allTasks} updateTasks={setAllTasks}/>
      </main>
    </Container>
  );
}

export default App;
