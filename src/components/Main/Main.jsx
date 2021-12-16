import React from 'react';
import styled from 'styled-components';

import AddTaskInput from '../AddTaskInput/AddTaskInput';
import TaskList from '../TaskList/TaskList';
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import HowToUseModal from "../HowToUseModal/HowToUseModal";
import SearchTaskInput from '../SearchTaskInput/SearchTaskInput';

const Container = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    padding: 1em;
    width: 80%;
    margin: 0 auto;

`

function Main() {
    return (
        <Container>
            <SearchTaskInput />
            <AddTaskInput />
            <TaskList />
            <EditTaskModal />
            <HowToUseModal />
        </Container>
    )
}

export default Main;
