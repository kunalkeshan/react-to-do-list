import React from 'react';
import styled from 'styled-components';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import moment from 'moment';
import taskManager from '../../helper/taskManager';

const TaskItem = styled.li`

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

function Task({TASKS, setTASKS, name, completed, created_at, theme, setOpenEditModal, editTaskValue, setEditTaskValue}) {

    const handleOpen = () => setOpenEditModal(true);

    const DarkModeBox = {
        background: theme === "light" ? "var(--bg-task, lightblue)" : "var(--bg-task-dark, lightblue)"
    }

    const handleEdit = (e, value) => {
        handleOpen();
        setEditTaskValue(value)
    }

    const handleDelete = (name) => {
        const res = taskManager("DELETE_TASK", {name});
        setTASKS(JSON.parse(res));
    }

    return (
        <TaskItem style={DarkModeBox}>
            <div id="task-details">
                <p className={completed ? "completed all-tasks" : "all-tasks"}>{name}</p>
                <span>{moment(created_at).calendar()}</span>
            </div>
            <div id="task-cta">
                <Tooltip title="Edit" arrow>
                    <IconButton
                        onClick={(e) => handleEdit(e, name)}
                    >
                        <EditIcon id="edit-btn" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" arrow>
                    <IconButton
                        onClick={() => handleDelete(name)}
                    >
                        <DeleteIcon id="delete-btn" />
                    </IconButton>
                </Tooltip>
            </div>
        </TaskItem>
    )
}

export default Task;
