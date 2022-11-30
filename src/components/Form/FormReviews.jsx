import React, {useState} from "react";
import { Box, Input, Rating, Button } from "@mui/material";
import axios from "axios";

export default function FormReviews(props) {

  const [stars, setStars] = useState();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
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
      <Rating
        name="stars"
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
      />
      <Input
        name="description"
        type="text"
        placeholder="Enter your review!"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Input 
        name="user_id"
        type="number"
        placeholder="user_id"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Input 
        name="book_id"
        type="number"
        placeholder="book_id"
        sx={{
          display: 'block',
          width: 1/2
        }}
      />
      <Button variant="outlined" type="submit">Submit</Button>
    </Box>
  ) 
}