import { React, useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import '../styles/App.css';

export default function Recommended() {

  const [likes, setLikes] = useState(100)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        color="success"
        className={`like-button ${isClicked && 'liked'}`} onClick={ handleClick }
      >
        <ThumbUpAltRoundedIcon/>Recommended
      </Button>
    </Stack>
  );
}