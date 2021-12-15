import React from 'react';
import styled from 'styled-components';

const Container = styled.header`

    background: var(--bg-nav, limegreen);
    padding: 0.4em;

    h1{
        color: var(--bg-btn, red);
        text-shadow: 2px 2px var(--bg-body, white), 3px 3px var(--bg-modal, red), 4px 4px var(--bg-task, blue);
        transition: all 250ms;
        width: fit-content;
        margin: 0 auto;
        cursor: pointer;

        :hover{
            text-shadow: 3px 3px var(--bg-body, white), 4px 4px var(--bg-modal, red), 5px 5px var(--bg-task, blue);
        }
    }
    
`

function Header() {
    const goToHome = () => {
        window.location.replace("/")
    }
    return (
        <Container>
            <h1 onClick={goToHome}>React To-Do List</h1>
        </Container>
    )
}

export default Header;
