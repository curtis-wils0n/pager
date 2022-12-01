import React, { useState } from "react";
import FormTemplate from "../components/Form/FormTemplate"
import useAPIData from '../hooks/useAPIData';
import { Grid } from '@mui/material'

export default function UserShelf() {

  const [showForm, setShowForm] = useState(false);

  const displayForm = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const {
    renderedUserShelf
  } = useAPIData();

  return (
    <>
      <form >
        <button onClick={displayForm}>Add Book</button>
      </form>
      {showForm && (
        <FormTemplate type="books" />
      )}
      <Grid container spacing={2}>
        {renderedUserShelf}
      </Grid>
    </>
  );
}