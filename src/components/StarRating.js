import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function StarRating(props) {
  return (
    <Stack spacing={1}>
      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
      <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
    </Stack>
  );
}