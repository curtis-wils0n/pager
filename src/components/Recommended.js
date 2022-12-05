import { React } from 'react';
import Button from '@mui/material/Button';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import '../styles/App.css';

export default function Recommended() {

  return (
    <Button 
      variant="contained" 
      color="success"
    >
      <ThumbUpAltRoundedIcon/>Recommended
    </Button>
  );
}