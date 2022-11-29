import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={props.bookData.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
);
}
