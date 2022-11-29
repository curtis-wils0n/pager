import React from "react";
import { TextField, Input, Box, MenuItem, Button } from "@mui/material";
import axios from "axios";

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
          onSubmit={(data) => {
            const { 
              book_title,
              author_name,
              book_year,
              book_cover_url,
              genre,
              pub_name,
              pub_location
            } = data.target;
            const bookURL = '/api/books';
            Promise.all([
              axios.put(bookURL, {
                book_title: book_title.value,
                author_name: author_name.value,
                book_year: book_year.value,
                book_cover_art_url: book_cover_url.value,
                genre: genre.value,
                pub_name: pub_name.value,
                pub_location: pub_location.value
              })
            ]).then(() => {
              console.log('complete');
            });
          }}
        >
          <Input
            name="book_title" 
            type="text" 
            placeholder="Book Title" 
            sx={{ 
              display: 'block',
              width: 1/2
            }}
          />
          <Input
            name="author_name"
            type="text"
            placeholder="Author's Name"
            sx={{ 
              display: 'block',
              width: 1/2
            }}
          />
          <Input
            name="book_year"
            type="number"
            placeholder="Year"
            sx={{ 
              display: 'block',
              width: 1/2
            }}
          />
          <Input 
            name="book_cover_url" 
            type="text" 
            placeholder="Book Cover URL"
            sx={{ 
              display: 'block',
              width: 1/2 
            }}
          />
          <TextField
            select
            label="Select"
            name="genre"
            value={genre}
            onChange={handleChange}
            sx={{ width: 1/2 }}
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
          <Input 
            name="pub_name"
            type="text"
            placeholder="Publisher's Name"
            sx={{ 
              display: 'block',
              width: 1/2
            }}
          />
          <Input
            name="pub_location"
            type="text"
            placeholder="Publisher's Location"
            sx={{ 
              display: 'block' ,
              width: 1/2
            }}
          />
          <Button variant="outlined" type="submit">Submit</Button>
        </Box>
      </section>
    </main>
  )
}