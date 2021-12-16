import React from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';

const Container = styled.div`
    
`

function SearchTaskInput() {
    return (
        <Container>
            <TextField label="Search Tasks" variant="standard" />
        </Container>
    )
}

export default SearchTaskInput;
