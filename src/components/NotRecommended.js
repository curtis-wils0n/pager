import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';

export default function NotRecommended() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="error">
        <ThumbDownAltRoundedIcon /> Not Recommended
      </Button>
    </Stack>
  );
}