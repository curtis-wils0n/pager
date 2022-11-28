import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BookListTest from './BookListTest.js';
import React, { useState } from "react";


const SearchBar = () => {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

return (
 <div className="main">
      <h1>Book Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
 </div>
 <BookListTest input={inputText} />
</div>
)
};

export default SearchBar;