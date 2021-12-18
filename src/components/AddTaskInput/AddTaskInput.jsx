import React, {useState} from 'react';
import styled from 'styled-components';

// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled as ms } from '@mui/material/styles';

const AddTaskForm = styled.form`
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em; 
    width: 100%;
    position: relative;   
    
`


const AddButton = ms(Button)((theme) => ({
    
})

)

function AddTaskInput({updateTasks}) {

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        e.stopPropagation();
        setInput(e.target.value);
    }

    const handleAddTaskForm = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(!input) {
            alert("task name cannot be empty");
            return;
        } else {
            alert(input)
        }
    }

    return (
        <AddTaskForm 
        noValidate 
        autoComplete="off"
        onSubmit={(e) => {handleAddTaskForm(e)}}
        >
            <TextField 
                label="Add new Task" 
                variant="outlined"
                id="add-input" 
                value={input}
                onChange={(e) => {handleInput(e)}}
            />
            <AddButton 
                variant="contained"
                type='submit'
            >
                <AddIcon />
            </AddButton>
        </AddTaskForm>
    )
}

export default AddTaskInput;
