import React, { useState, useEffect } from "react";
import UserShelfItem from "../routes/UserShelfItem";
import UserReviewsItem from "../routes/UserReviewsItem";
import UserListsItem from "../routes/UserListsItem";
import axios from 'axios';


export default function useAPIData(initial) {

  // hook for book form creation 
  const [genre, setGenre] = React.useState();

  const handleChange = (event) => {
    setGenre(event.target.value);
  }
  // Replace with dynamic call to DB
  const genres = [
    'Action',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Manga',
    'Non-Fiction'
  ]

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

  function sortName() {
    const sortedData = [...books].sort((a, b) => {
      return a.author_name > b.author_name ? 1 : -1;
    })
    setBooks(sortedData);
  }

  function sortTitle() {
    const sortedData = [...books].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
    setBooks(sortedData);
  }

  function sortYear() {
    const sortedData = [...books].sort((a, b) => {
      return a.year > b.year ? 1 : -1;
    })
    setBooks(sortedData);
  }

  const renderedUserShelf = books.map(book =>
    <UserShelfItem
      key={book.id}
      id={book.id}
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

  // Render user list titles and description 
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
      cover_art_url={list.cover_art_url}
    />
  )
  
  return {
    sortName,
    sortTitle,
    sortYear,
    genre,
    handleChange,
    genres,
    setStars,
    stars,
    renderedUserShelf,
    renderedReviews,
    renderedLists 
  }
}