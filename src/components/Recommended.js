import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

export default function Recommended() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        <ThumbUpAltRoundedIcon /> Recommended
      </Button>
    </Stack>
  );
}