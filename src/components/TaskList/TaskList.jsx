import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';

const TaskCollection = styled.ul`

    width: clamp(280px, 100%, 720px);
    
`

function TaskList({TASKS, theme, openEditModal, setOpenEditModal, editTaskValue, setEditTaskValue}) {
    return (
        <TaskCollection>
            {
                TASKS.map((task, index) => (
                    <Task
                        key={index} 
                        name={task.name}
                        completed={task.completed}
                        created_at={task.created_at}
                        theme={theme}
                        openEditModal={openEditModal}
                        setOpenEditModal={setOpenEditModal}
                        editTaskValue={editTaskValue}
                        setEditTaskValue={setEditTaskValue}
                    />
                ))
            }
        </TaskCollection>
    )
}

export default TaskList;
