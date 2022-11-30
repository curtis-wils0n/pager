import { Grid } from "@mui/material";
import React from "react";
import FormTemplate from "../components/Form/FormTemplate";
import useAPIData from '../hooks/useAPIData';

export default function UserReviews() {
  
  const {
    renderedReviews
  } = useAPIData()

  return (
    <>
      <FormTemplate
        type="reviews"
      />
      <Grid container spacing={2}>
        {renderedReviews}
      </Grid>
    </>
  );
}