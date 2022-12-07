import React from "react";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";
import '../styles/Review.css'

export default function UserAllReviewsItem(props) {

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
        <p>{props.first_name} {props.last_name} said: "{props.description}"</p>
      </div>
    </div>
  );
}