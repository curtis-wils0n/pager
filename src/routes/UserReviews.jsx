import React, { useState, useEffect } from "react";
import UserReviewsItem from "./UserReviewsItem";
import FormTemplate from "../components/Form/FormTemplate";
import axios from "axios";


export default function UserReviews() {
  
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const reviewURL = '/api/reviews';
    Promise.all([
      axios.get(reviewURL)
    ]).then((all) => {
      setReviews(all[0].data);
    });
  }, []);

  const renderedReviews = reviews.map(review => 
    <UserReviewsItem 
      key={review.id}
      stars={review.stars}
      recommended={review.recommended}
      description={review.description}
      first_name={review.first_name}
      last_name={review.last_name}
      title={review.title}
      author_name={review.author_name}
      year={review.year}
      publisher_name={review.publisher_name}
      location={review.location}
      cover_art_url={review.cover_art_url}
      genre={review.genre}
    />
  )

  return (
    <div>
      <FormTemplate
        type="reviews"
      />
      {renderedReviews}
    </div>
  );
}