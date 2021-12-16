import React from 'react';
import styled from 'styled-components';

const Container = styled.header`

    background: var(--bg-nav, limegreen);
    padding: 0.4em;

    h1{
        color: var(--bg-body, red);
        transition: all 500ms;
        width: fit-content;
        margin: 0 auto;
        cursor: pointer;

        :hover {
            color: #000;
        }
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
