import React, { useState } from "react";
import FormTemplate from "../components/Form/FormTemplate";
import useAPIData from '../hooks/useAPIData';
import Navbar from '../routes/navbar';
import { Grid, Button } from '@mui/material'

export default function UserShelf() {

  const [showForm, setShowForm] = useState(false);

  const displayForm = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const {
    renderedUserShelf,
    sortName,
    sortTitle,
    sortYear
  } = useAPIData();

  return (
    <>
    <Navbar />
      <form>
        <Button variant="outlined" onClick={displayForm}>Add Book</Button>
      </form>
      <form>
        <Button variant="outlined" onClick={sortName}>Sort By Author</Button>
      </form>
      <form>
        <Button variant="outlined" onClick={sortTitle}>Sort By Title</Button>
      </form>
      <form>
        <Button variant="outlined" onClick={sortYear}>Sort By Year</Button>
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