import React from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { styled as ms } from '@mui/material/styles';


const Modal = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg-modal);
    padding: 1em;
    width: clamp(300px, 100%, 320px);
    border-radius: 12px;
    text-align: center;
`

const EditButton = ms(Button)((theme) => {
    
});

const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 80%;
    margin: 12px auto;
`

function EditTaskModal({name}) {
    return (
        <Modal>
            <div>
                <h2>Edit Task</h2>
                <span>{name}</span>
            </div>
            <EditForm>
                <TextField label="Edit task" />
                <EditButton variant="contained">Edit</EditButton>
            </EditForm>
        </Modal>
    )
}

export default EditTaskModal;
