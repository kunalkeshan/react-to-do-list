import React from 'react';
import styled from 'styled-components';

import HowToUseModal from "../HowToUseModal/HowToUseModal";
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const Container = styled.footer`
    
    margin-top: auto;
    text-align: center;

    #help-btn{
        cursor: pointer;
    }

`

function Footer() {
    let i = 0;
    const handleHelpModal = () => {
        alert("number of times pressed: " + i)
        i++
    }

    return (
        <Container>
            <Tooltip title="Help" arrow>
                <IconButton onClick={handleHelpModal}>
                    <HelpIcon id="help-btn" />
                </IconButton>
            </Tooltip>
            <HowToUseModal />
        </Container>
    )
}

export default Footer;
