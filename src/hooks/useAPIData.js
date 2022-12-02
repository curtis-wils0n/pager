import React, { useState, useEffect } from "react";
import UserShelfItem from "../routes/UserShelfItem";
import UserReviewsItem from "../routes/UserReviewsItem";
import UserListsItem from "../routes/UserListsItem";
import axios from 'axios';


export default function useAPIData(initial) {

  // star rating setting
  const [stars, setStars] = useState();

  // Render the users shelf
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const bookURL = '/api/books';
    Promise.all([
      axios.get(bookURL)
    ]).then((all) => {
      setBooks(all[0].data);
    });
  }, []);


  const renderedUserShelf = books.map(book =>
    <UserShelfItem
      key={book.id}
      title={book.title}
      book_cover_art_url={book.cover_art_url}
      author={book.author_name}
      year={book.year}
    />
  );

  // Render the user reviews
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

  // Render user lists
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    const listURL = '/api/lists';
    Promise.all([
      axios.get(listURL)
    ]).then((all) => {
      setLists(all[0].data);
    });
  }, []);

  const renderedLists = lists.map(list => 
    <UserListsItem 
      key={list.id}
      title={list.title}
      description={list.description}
      first_name={list.first_name}
      last_name={list.last_name}
    />
  )
  
  return {
    setStars,
    stars,
    renderedUserShelf,
    renderedReviews,
    renderedLists
  }
}