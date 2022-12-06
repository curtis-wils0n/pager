import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function StarRating(props) {
  return (
    <Stack>
      <Rating
        name="half-rating-read"
        defaultValue={props.rating}
        precision={0.5}
        size="large"
        sx={{margin: '-40px 0px 0px -10px', color: 'black'}}
        readOnly
      />
    </Stack>
  );
}