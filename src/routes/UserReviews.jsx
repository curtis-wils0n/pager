import { Grid } from "@mui/material";
import React from "react";
import useAPIData from '../hooks/useAPIData';

export default function UserReviews() {
  
  const {
    renderedReviews
  } = useAPIData()

  return (
    <>
      <Grid container spacing={2}>
        {renderedReviews}
      </Grid>
    </>
  );
}