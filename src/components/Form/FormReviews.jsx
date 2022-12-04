import React, { useState } from "react";
import { Box, Input, Rating, Button, Grid, Switch, Typography, Stack } from "@mui/material";
import useAPIData from '../../hooks/useAPIData';
import axios from "axios";

export default function FormReviews(props) {

  const [recommended, setRecommended] = useState(false);

  const changeRecommended = () => {
    setRecommended(!recommended);
  }

  const {
    setStars
  } = useAPIData()

  
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
        console.log(recommended);
        Promise.all([
          axios.put(reviewURL, {
            stars: stars.value,
            recommended,
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

            onChange={(newValue) => {
              setStars(newValue);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Not Recommended</Typography>
            <Switch 
              name="recommended"
              defaultValue={false}
              onChange={() => {
                changeRecommended();
              }}
            />
            <Typography>Recommended</Typography>
          </Stack>  
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