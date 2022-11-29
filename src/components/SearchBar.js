import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.bookData}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Book" />}
    />
  );
}