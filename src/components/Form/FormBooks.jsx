import React from "react";
import { Box, Input, TextField, Button, MenuItem, Grid } from "@mui/material";
import axios from "axios";
import useAPIData from '../../hooks/useAPIData';

export default function FormContent(props) {

  const {
    genre,
    handleChange,
    genres,
  } = useAPIData();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ flexGrow: 1 }}
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
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Input
            name="book_title" 
            type="text" 
            placeholder="Book Title" 
          />
        </Grid>
        <Grid item xs={9}>
          <Input
            name="author_name"
            type="text"
            placeholder="Author's Name"
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            name="book_year"
            type="number"
            placeholder="Year"
          />
        </Grid>
        <Grid item xs={9}>
          <Input 
            name="book_cover_url" 
            type="text" 
            placeholder="Book Cover URL"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Select Genre"
            name="genre"
            value={genre}
            onChange={handleChange}
            sx={{width: .45}}
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
        </Grid>
        <Grid item xs={3}>
          <Input 
            name="pub_name"
            type="text"
            placeholder="Publisher's Name"
          />
        </Grid>
        <Grid item xs={9}>
          <Input
            name="pub_location"
            type="text"
            placeholder="Publisher's Location"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            type="submit"
            sx={{width: .9}}
          >
              Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}