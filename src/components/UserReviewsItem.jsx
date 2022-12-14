import React from "react";
import StarRating from "../components/StarRating.jsx";
import { useNavigate } from "react-router-dom";
import '../styles/Review.css'

/**
 * Component to render the review of the logged-in user
 * TODO: combine with UserAllReviewsItem for DRY code
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function UserReviewsItem(props) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/books/${data}`);
  }

  return (
    <div className={ props.recommended ? "review-card positive" : "review-card negative" }>
      <div>
        <img
          onClick={() => handleClick(props.id)}
          className="book-cover"
          src={props.cover_art_url}
          alt={props.title}
          width='200'
          height='300'
        />
      </div>
      <div className="review-info">
        <StarRating rating={props.stars} />
        <p>{!props.recommended ? "Not" : ""} Recommended</p>
        <p>You said: "{props.description}"</p>
      </div>
    </div>
  );
}