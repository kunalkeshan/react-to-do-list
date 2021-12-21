import React, {useState} from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .search-icon{
        position: absolute;
        bottom: 4px;
        right: 0;
        transition: all 250ms;
    }

    #active{
        transform: rotate(20deg);
    }

`


function SearchTaskInput({theme, TASKS, setTASKS}) {

    const [iconPlace, setIconPlace] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const handleIconFocus = (e) => {
        e.stopPropagation();
        setIconPlace("active")
    }

    const handleIconFocusOut = (e) => {
        setIconPlace("");
    }

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <Container>
            <TextField 
                label="Search Tasks" 
                variant="standard"
                value={searchValue} 
                onFocus={(e) => {handleIconFocus(e)}}
                onBlur={(e) => handleIconFocusOut(e)}
                onChange={(e) => {handleSearchValue(e)}}
            />
            <SearchIcon className="search-icon" id={iconPlace !== "active" ? "active" : ""} />
        </Container>
    )
}

export default SearchTaskInput;
