import {React, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar(props) {

  // function transformBookData(obj) {
  //    return Object.keys(obj);
  // }

  const testString = "this is a test";

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      option={testString}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Book" />}
    />
  );
}