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

  const list1 = renderedLists.filter(list => list.key === '1')
  const list2 = renderedLists.filter(list => list.key === '3')

  return (
    <>
      <h1 className="page-header">My Lists</h1>
      <form>
        <Button variant='outlined' disableRipple onClick={displayForm}>Add List</Button>
      </form>
      {showForm && (
        <FormLists />
      )}
      <h1>Abby's favourite books of 2022</h1>
      <p>These are some books that I really liked reading in 2022</p>
      <Grid container spacing={2}>
        {list1}
      </Grid>
      <h1>Abby's revised favourite books list of 2022</h1>
      <p>Here are a new bunch of books that I actually like better than the last list I made!</p>
      <Grid container spacing={2}>
        {list2}
      </Grid>
    </>
  );
}