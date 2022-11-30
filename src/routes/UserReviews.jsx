import React from "react";
import FormTemplate from "../components/Form/FormTemplate";
import useAPIData from '../hooks/useAPIData';

export default function UserReviews() {
  
  const {
    renderedReviews
  } = useAPIData()

  return (
    <div>
      <FormTemplate
        type="reviews"
      />
      {renderedReviews}
    </div>
  );
}