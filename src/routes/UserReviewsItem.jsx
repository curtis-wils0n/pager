import React from "react";
import StarRating from "../components/StarRating.js";
import { Grid } from '@mui/material'

export default function UserReviewsItem(props) {

  return (
    <Grid item xs={3}>
      <img 
        src={props.cover_art_url}
        alt={props.title}
        width='200'
        height='300'
      />
      <p>{!props.recommended ? "Not" : ""} Recommended: {props.first_name} {props.last_name} gave <i>{props.title}</i> a <strong>{props.stars}/5</strong> and said: "{props.description}"</p>
      <StarRating />
    </Grid>
  );
}