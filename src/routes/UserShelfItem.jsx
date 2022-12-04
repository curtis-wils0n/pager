import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material'

export default function UserShelfItem(props) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/books/${data}`);
  }

  return (
    <Grid item xs={3}>
      <img
        onClick={() => handleClick(props.id)}
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