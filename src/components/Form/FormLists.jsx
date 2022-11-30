import React from "react";
import { Box, Input, Button, Grid } from "@mui/material";
import axios from "axios";

export default function FormLists(props) {


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ flexGrow: 1 }}
      onSubmit={(data) => {
        const { 
          title,
          description,
          first_name,
          last_name
        } = data.target;
        const listURL = '/api/lists';
        Promise.all([
          axios.put(listURL, {
            title: title.value,
            description: description.value,
            first_name: first_name.value,
            last_name: last_name.value
          })
        ]).then(() => {
          console.log('complete');
        });
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Input
            name="title"
            type="text"
            placeholder="List Title"
          />
        </Grid>
        <Grid item xs={9}>
          <Input 
            name="description"
            type="text"
            placeholder="Description"
          />
        </Grid>
        <Grid item xs={3}>
          <Input 
            name="first_name"
            type="text"
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={9}>
          <Input 
            name="last_name"
            type="text"
            placeholder="Last Name"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            type="submit"
            sx={{ width: .91 }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) 
}