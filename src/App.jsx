import React, {useState, useEffect} from "react";
import "./App.css";
import styled from "styled-components";

import Header from './components/Header/Header';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import TaskList from './components/TaskList/TaskList';
import EditTaskModal from "./components/EditTaskModal/EditTaskModal";
import HowToUseModal from "./components/HowToUseModal/HowToUseModal";

const Container = styled.div`
  
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
      <EditTaskModal />
      <HowToUseModal />
    </Container>
  );
}

export default App;
