import React from "react";
import { Box, Input, Button } from "@mui/material";
import axios from "axios";

export default function FormReviews(props) {


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
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
      <Input
        name="title"
        type="text"
        placeholder="Enter list title"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Input 
        name="description"
        type="text"
        placeholder="description"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Input 
        name="first_name"
        type="text"
        placeholder="first_name"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
        <Input 
        name="last_name"
        type="text"
        placeholder="last_name"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Button variant="outlined" type="submit">Submit</Button>
    </Box>
  ) 
}