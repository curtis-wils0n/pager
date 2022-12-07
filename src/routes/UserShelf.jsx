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
      <h1 className="page-header">My Shelf</h1>
      <div className="sort-buttons">
        <div>
          <form>
            <Button variant="outlined" disableRipple onClick={displayForm}>Add Book</Button>
          </form>
        </div>
        <div className="sort-buttons">
          <form>
            <Button variant="outlined" disableRipple onClick={sortName}>Sort By Author</Button>
          </form>
          <form>
            <Button variant="outlined" disableRipple onClick={sortTitle}>Sort By Title</Button>
          </form>
          <form>
            <Button variant="outlined" disableRipple onClick={sortYear}>Sort By Year</Button>
          </form>
        </div>
      </div>
      <div className="add-book-form">
        {showForm && (
          <FormTemplate type="books" />
        )}
      </div>
      <div className="book-grid">
        <Grid container spacing={2}>
          {renderedUserShelf}
        </Grid>
      </div>
    </>
  );
}