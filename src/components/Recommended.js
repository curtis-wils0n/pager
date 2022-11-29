import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import '../styles/App.css';

export default function Recommended() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        <ThumbUpAltRoundedIcon /> A very good read!
      </Button>
    </Stack>
  );
}