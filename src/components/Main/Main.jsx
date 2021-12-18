import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import AddTaskInput from '../AddTaskInput/AddTaskInput';
import TaskList from '../TaskList/TaskList';
import EditTaskModal from "../EditTaskModal/EditTaskModal";
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


let TASKS = [
    {
        name: "Book Appointment",
        completed: false,
        created_at: "10th Dec",
    },
    {
        name: "Recharge Mobile",
        completed: false,
        created_at: "11th Dec",
    },
    {
        name: "Buy Groceries",
        completed: true,
        created_at: "4th Dec",
    },
];

function Main({theme}) {

    const [allTasks, setAllTasks] = useState(TASKS);

    useEffect(() => {
        const getTasks = () => {
            if(!localStorage.getItem("tasks")) {
                localStorage.setItem("tasks", JSON.stringify(allTasks));
            } else {
                TASKS = JSON.parse(localStorage.getItem("tasks"));
            }
        }
        getTasks();
    }, [allTasks])

    return (
        <Container>
            <SearchTaskInput />
            <AddTaskInput />
            <TaskList TASKS={allTasks}/>
            <EditTaskModal />
        </Container>
    )
}

export default Main;
