import React from "react";
import { Grid } from '@mui/material'

export default function UserShelfItem(props) {

  return (
    <Grid item xs={3}>
      <img
        className="book-cover"
        src={props.book_cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <p>{props.title} ({props.year}) by {props.author}</p>
    </Grid>
  );
}