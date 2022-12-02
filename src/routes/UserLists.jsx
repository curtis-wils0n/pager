import React, { useState } from "react";
import FormLists from '../components/Form/FormLists';
import useAPIData from '../hooks/useAPIData';
import { Button, Grid } from '@mui/material';

export default function UserLists() {

  const [showForm, setShowForm] = useState(false);

  const displayForm = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  const {
    renderedLists
  } = useAPIData()

  return (
    <>
      <form>
        <Button variant='outlined' onClick={displayForm}>Add List</Button>
      </form>
      {showForm && (
        <FormLists />
      )}
      <h1>Test McTest's Epic List of Epic Book's</h1>
      <Grid container spacing={2}>
        {renderedLists}
      </Grid>
    </>
  );
}