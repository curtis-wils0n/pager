import * as React from 'react';
import Button from '@mui/material/Button';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import '../styles/App.css';

export default function NotRecommended() {
  return (
    <Button variant="contained" color="error">
      <ThumbDownAltRoundedIcon /> Not Recommended
    </Button>
  );
}