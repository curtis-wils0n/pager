import React from "react";
import { TextField, Input, Box, MenuItem, Button } from "@mui/material";

export default function Form(props) {

  const [genre, setGenre] = React.useState();

  const handleChange = (event) => {
    setGenre(event.target.value);
  }
  // Replace with dynamic call to DB
  const genres = [
    'Action',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Manga',
    'Non-Fiction'
  ]

  return (
    <main>
      <section>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Input name="book_title" type="text" placeholder="Book Title" />
          <Input name="author_name" type="text" placeholder="Author's Name" />
          <Input name="book_year" type="number" placeholder="Year" />
          <Input 
            name="book_cover_url" 
            type="text" 
            placeholder="Book Cover URL"
          />
          <TextField
            select
            label="Select"
            value={genre}
            onChange={handleChange}
            helperText="Please select a genre"
            SelectProps={{
              native: false,
            }}
          >
            {genres.map((option) => (
              <MenuItem value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Input name="pub_name" type="text" placeholder="Publisher's Name" />
          <Input name="pub_location" type="text" placeholder="Publisher's Location"/>
          <Button variant="outlined" type="submit">Submit</Button>
        </Box>
      </section>
    </main>
  )
}