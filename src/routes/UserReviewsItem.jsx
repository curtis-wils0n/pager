import React from "react";
import StarRating from "../components/StarRating.js";
import { Grid } from '@mui/material'

export default function UserReviewsItem(props) {

  return (
    <Grid item xs={3}>
      <img
        className="book-cover"
        src={props.cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <p>{!props.recommended ? "Not" : ""} Recommended!</p>
      <p>{props.first_name} {props.last_name} said: "{props.description}"</p>
      <StarRating rating={props.stars} />
    </Grid>
  );
}