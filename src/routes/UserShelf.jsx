import React, { useState } from "react";
import FormTemplate from "../components/Form/FormTemplate";
import useAPIData from '../hooks/useAPIData';
import { Grid, Button } from '@mui/material'
import '../styles/UserShelf.css';

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
    <div class="sort-buttons">
    <div id="add-book-button">
      <form>
        <Button variant="outlined" onClick={displayForm}>Add Book</Button>
      </form>
      </div>
      <form>
        <Button variant="outlined" onClick={sortName}>Sort By Author</Button>
      </form>
      <form>
        <Button variant="outlined" onClick={sortTitle}>Sort By Title</Button>
      </form>
      <form>
        <Button variant="outlined" onClick={sortYear}>Sort By Year</Button>
      </form>
      </div>
      <div class="add-book-form">
      {showForm && (
        <FormTemplate type="books" />
      )}
      </div>
      <div class="book-grid">
      <Grid container spacing={2}>
        {renderedUserShelf}
      </Grid>
      </div>
    </>
  );
}