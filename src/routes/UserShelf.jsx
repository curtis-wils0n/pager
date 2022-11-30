import React from "react";
import FormTemplate from "../components/Form/FormTemplate"
import useAPIData from '../hooks/useAPIData';
import { Grid } from '@mui/material'

export default function UserShelf() {
  
 const {
  renderedUserShelf
 } = useAPIData();

  return (
    <>
      <FormTemplate type="books" />
      <Grid container spacing={2}>
        {renderedUserShelf}
      </Grid>  
    </>
  );
}