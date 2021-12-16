import React from 'react';
import styled from 'styled-components';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskItem = styled.li`

    background: var(--bg-task, lightblue);
    list-style: none;
    width: 100%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em;
    border-radius: 4px;

    #task-details {

        text-decoration: unset;

        p {
            font-size: 1.2rem;
            font-weight: bold;
        }

        span {
            font-size: .8rem;
        }
    }

    .completed {
        text-decoration: line-through;
    }

    #task-cta{
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        #edit-btn{
            color: green;
        }

        #delete-btn{
            color: red;
        }
    }
`

function Task({name, completed, created_at}) {
    return (
        <TaskItem>
            <div id="task-details">
                <p className={completed ? "completed" : ""}>{name}</p>
                <span>{created_at}</span>
            </div>
            <div id="task-cta">
                <EditIcon id="edit-btn" />
                <DeleteIcon id="delete-btn" />
            </div>
        </TaskItem>
    )
}

export default Task;
