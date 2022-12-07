import React, { useState } from "react";
import { Box, Input, Rating, Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAPIData from '../../hooks/useAPIData';
import axios from "axios";

export default function FormReviews(props) {

  const [recommended, setRecommended] = useState(false);

  const setRecommendedValue = () => {
    setRecommended(true);
  }

  const setNotRecommendedValue = () => {
    setRecommended(false);
  }

  const navigate = useNavigate();

  const {
    setStars
  } = useAPIData()

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ flexGrow: 1 }}
      onSubmit={(event) => {
        event.preventDefault();
        const { 
          stars,
          description,
        } = event.target;
        const reviewURL = '/api/reviews';
        Promise.all([
          axios.put(reviewURL, {
            stars: stars.value,
            recommended,
            description: description.value,
            user_id: props.user_id,
            book_id: props.book_id
          })
        ]).then(() => {
          navigate('/user/reviews');
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
            <button onClick={e => {
              e.preventDefault();
              setNotRecommendedValue();
            }}>
              Not Recommended
            </button>
            <button onClick={e => {
              e.preventDefault();
              setRecommendedValue();
            }}>
              Recommended
            </button>
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
        <Grid item xs={6}>
          <Button
            variant="outlined"
            disableRipple
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