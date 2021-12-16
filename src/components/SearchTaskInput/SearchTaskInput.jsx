import React, {useState} from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    #search-icon{
        position: absolute;
        bottom: 4px;
        right: 0;
        transition: all 250ms;
    }

    .active{
        transform: scale(1.05);
    }

`

function SearchTaskInput() {

    const [iconPlace, setIconPlace] = useState("");

    const handleIconPlace = () => {
        setIconPlace(iconPlace ? "active" : "")
    }

    return (
        <Container>
            <TextField label="Search Tasks" variant="standard" onFocusCapture={handleIconPlace}/>
            <SearchIcon id="search-icon" className={iconPlace === "active" ? "active" : ""} />
        </Container>
    )
}

export default SearchTaskInput;
