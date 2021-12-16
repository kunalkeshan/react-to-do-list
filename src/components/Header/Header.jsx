import React from 'react';
import styled from 'styled-components';

import Logo from "../../logo.svg"

const Container = styled.header`

    padding: 0.4em;
    transition: all 500ms;

    h1{
        color: #000;
        width: fit-content;
        margin: 0 auto;
        cursor: pointer;
        font-weight: bolder;
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
