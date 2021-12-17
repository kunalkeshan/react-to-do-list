import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Logo from "../../logo.svg";

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

const Container = styled.header`

    padding: 0.4em;
    transition: all 500ms;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0002;

    img{
        width: clamp(40px, 100%, 72px);
        height: auto;
        animation: rotate 4s infinite ease-in-out;
    }

    h1{
        color: #000;
        margin: 0 auto;
        cursor: pointer;
        font-weight: bolder;

        @media(max-width: 420px){
            font-size: 1.5rem;
        }
    }

    #header-btn{
        color: #000;
        transition: all 250ms;

        :hover{
            transform: scale(1.02) rotate(12deg);
        }
    }


    @keyframes rotate {
        0%{
            transform: rotate(0deg);
        }

        50%{
            transform: rotate(360deg);
        }

        100%{
            transform: rotate(0deg);
        }
    }
    
`

const Flexed = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

function Header() {

    return (
        <Container>
            <Flexed>
                <img src={Logo} />
                <h1>React To-Do List</h1>
            </Flexed>
            <ButtonGroup variant='outlined'>
                <IconButton href="https://github.com/kunalkeshan/react-to-do-list" target="_blank">
                    <Tooltip title="GitHub" arrow>
                        <GitHubIcon id="header-btn" />
                    </Tooltip>
                </IconButton>
                <IconButton href="https://linktr.ee/kunalkeshan" target="_blank">
                    <Tooltip title="Connect" arrow>
                        <PublicIcon id="header-btn" />
                    </Tooltip>
                </IconButton>
            </ButtonGroup>
        </Container>
    )
}

export default Header;
