import React from "react";
import StarRating from "../components/StarRating.js";
import { Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";

export default function UserReviewsItem(props) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/books/${data}`);
  }

  return (
    <Grid item xs={3}>
      <img
        onClick={() => handleClick(props.id)}
        className="book-cover"
        src={props.cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <StarRating rating={props.stars} />
      <p>{!props.recommended ? "Not" : ""} Recommended</p>
      <p>{props.first_name} {props.last_name} said: "{props.description}"</p>
    </Grid>
  );
}