import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';

const TaskCollection = styled.ul`

    width: clamp(280px, 100%, 720px);
    
`

function TaskList({TASKS}) {
    return (
        <TaskCollection>
            {
                TASKS.map((task, index) => (
                    <Task
                        key={index} 
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
