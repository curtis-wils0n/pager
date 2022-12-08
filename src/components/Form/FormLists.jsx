import React from "react";
import { Box, Input, Button, Grid } from "@mui/material";
import axios from "axios";
import useAPIData from "../../hooks/useAPIData";
import '../../styles/BookContainer.css';

/**
 * Form component to make PUT queries to lists DB
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function FormLists(props) {

  const { renderedUserShelf } = useAPIData();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ flexGrow: 1 }}
      onSubmit={(data) => {
        const { 
          title,
          description,
          userID,
        } = data.target;
        Promise.all([
          axios.put('/api/lists', {
            title: title.value,
            description: description.value,
            user_id: userID.value
          })
        ])
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Input
            name="title"
            type="text"
            placeholder="List Title"
          />
        </Grid>
        <Grid item xs={9}>
          <Input 
            name="description"
            type="text"
            placeholder="Description"
          />
        </Grid>
        <Grid item xs={12}>
          <div className="book-container">
            {renderedUserShelf.map(book => (
              <img 
                className="book-container-item"
                alt={book.props.title}
                src={book.props.book_cover_art_url}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            disableRipple
            type="submit"
            sx={{ width: .91 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}