import React from 'react';
import styled from 'styled-components';

// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTaskForm = styled.form`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em; 
    width: 100%;   
    
`

function AddTaskInput({updateTasks}) {
    return (
        <AddTaskForm noValidate autoComplete="off">
            <TextField label="Add new Task" variant="outlined" />
            <Button variant="contained">Add</Button>
        </AddTaskForm>
    )
}

export default AddTaskInput;
