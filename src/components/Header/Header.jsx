import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    h1{
        
    }
`

function Header() {
    return (
        <Container>
            <h1>React To-Do List</h1>
        </Container>
    )
}

export default Header;
