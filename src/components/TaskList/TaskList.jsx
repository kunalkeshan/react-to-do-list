import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';

const TaskCollection = styled.ul`

    width: 100%;
    
`

const TASKS = [
    {
        name: "Task 1",
        completed: false,
        created_at: "wed, 10",
    },
    {
        name: "Task 2",
        completed: false,
        created_at: "wed, 11",
    },
    {
        name: "Task 3",
        completed: true,
        created_at: "wed, 4",
    },
];

function TaskList({tasks, updateTasks}) {
    return (
        <TaskCollection>
            {
                TASKS.map((task) => (
                    <Task 
                        name={task.name}
                        completed={task.completed}
                        created_at={task.created_at}
                    />
                ))
            }
        </TaskCollection>
    )
}

export default TaskList;
