import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import '../styles/App.css';

export default function NotRecommended() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="error">
        <ThumbDownAltRoundedIcon /> This book trash!
      </Button>
    </Stack>
  );
}