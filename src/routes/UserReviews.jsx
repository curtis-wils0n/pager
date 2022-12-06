import React from "react";
import useAPIData from '../hooks/useAPIData';

export default function UserReviews() {
  
  const {
    renderedReviews
  } = useAPIData()

  return (
    <>
      <h1 className="page-header">My Reviews</h1>
      <div>
        {renderedReviews}
      </div>
    </>
  );
}