import { Grid } from "@mui/material";
import React, { useState } from "react";
import FormTemplate from "../components/Form/FormTemplate";
import useAPIData from '../hooks/useAPIData';

export default function UserReviews() {
  
  const [showForm, setShowForm] = useState(false);

  const displayForm = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const {
    renderedReviews
  } = useAPIData()

  return (
    <>
      <form>
        <button onClick={displayForm}>Add Review</button>
      </form>
      {showForm && (
        <FormTemplate type="reviews" />
      )}
      <Grid container spacing={2}>
        {renderedReviews}
      </Grid>
    </>
  );
}