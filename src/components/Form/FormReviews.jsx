import React, {useState} from "react";
import { Box, Input, Rating, Button, Grid } from "@mui/material";
import axios from "axios";

export default function FormReviews(props) {

  const [stars, setStars] = useState();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ flexGrow: 1 }}
      onSubmit={(data) => {
        const { 
          stars,
          description,
          user_id,
          book_id
        } = data.target;
        const reviewURL = '/api/reviews';
        Promise.all([
          axios.put(reviewURL, {
            stars: stars.value,
            recommended: true,
            description: description.value,
            user_id: user_id.value,
            book_id: book_id.value
          })
        ]).then(() => {
          console.log('complete');
        });
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Rating
            name="stars"
            onChange={(event, newValue) => {
              setStars(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="description"
            type="text"
            placeholder="Enter your review!"
            sx={{width: .452}}
          />
        </Grid>
        <Grid item xs={3}>
          <Input 
            name="user_id"
            type="number"
            placeholder="user_id"
          />
        </Grid>
        <Grid item xs={9}>
          <Input 
            name="book_id"
            type="number"
            placeholder="book_id"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            type="submit"
            sx={{width: .91}}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) 
}