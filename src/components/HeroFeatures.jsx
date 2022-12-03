import React from "react";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GradeIcon from '@mui/icons-material/Grade';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

export default function HeroFeatures(props) {
  return(
    <>
      <div className="hero-feature-bg">
        <div className="hero-feature-content">
          <CollectionsBookmarkIcon />
          <GradeIcon />
          <DriveFileRenameOutlineIcon/>
        </div>
        <div className="hero-feature-content">
          <h1>Collect</h1>
          <h1>Review</h1>
          <h1>Curate</h1>
        </div>
        <div className="hero-feature-content">
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
      </div> 
    </>
  );
}