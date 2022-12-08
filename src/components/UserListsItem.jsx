import React from "react";
import { Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";

/**
 * Component to display each book present in a user's list
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function UserListsItem(props) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/books/${data}`);
  }

  return (
    <Grid item xs={2}>
      <img
        onClick={() => handleClick(props.id)}
        className="book-cover"
        src={props.cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <p>{props.title}</p>
    </Grid>
  );
}