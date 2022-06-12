import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './index.css'
import { useState } from 'react';

export const Search = (props) => {
    const [search, setSearch] = useState('');

    return (
        <div className='search-container'>
            <TextField
                id="standard-basic"
                label="Search for pokemon"
                variant="standard"

                size='medium'
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button
                variant='contained'
                color='primary'
                onClick={(e) => props.getPokemon(search)}
            >
                Search
            </Button>
        </div>

    );
}