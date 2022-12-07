import React from "react";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GradeIcon from '@mui/icons-material/Grade';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function HeroFeatures(props) {
  return(
    <>
      <div className="hero-feature-bg">
        <div className="hero-feature-content">
          <CollectionsBookmarkIcon
            sx={{fontSize: '3em'}}
          />
          <GradeIcon
            sx={{fontSize: '3em'}}
          />
          <DriveFileRenameOutlineIcon
            sx={{fontSize: '3em'}}
          />
        </div>
        <div className="hero-feature-content">
          <h1>Collect</h1>
          <h1>Review</h1>
          <h1>Curate</h1>
        </div>
        <div className="hero-feature-content">
          <p>Organize and show off your ever-expanding library</p>
          <p>Share your own personal reviews of the books you've read</p>
          <p>Create lists of books to send to your friends</p>
        </div>
      </div> 
    </>
  );
}