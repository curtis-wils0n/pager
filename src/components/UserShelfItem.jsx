import React from "react";
import { Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";

/**
 * Component for rendering all books present on a user's shelf
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function UserShelfItem(props) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/books/${data}`);
  }

  return (
    <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
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