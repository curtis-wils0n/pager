import React, { useState, useEffect } from "react";
import UserShelfItem from "../components/UserShelfItem";
import UserReviewsItem from "../components/UserReviewsItem";
import UserListsItem from "../components/UserListsItem";
import axios from 'axios';

export default function useAPIData(initial) {

  const [genre, setGenre] = useState('');
  const [stars, setStars] = useState(1);
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/api/books'),
      axios.get('/api/lists'),
      axios.get('/api/reviews')
    ]).then((all) => {
      setBooks(all[0].data);
      setLists(all[1].data);
      setReviews(all[2].data);
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

  //Hardcoded values for demo purposes, should be replaced by existing Genre API
  const genres = [
    'Action & Adventure',
    'Art & Photography',
    'Biography',
    'Children\'s',
    'Contemporary Fiction',
    'Dystopian',
    'Essays',
    'Fantasy',
    'Food & Drink',
    'Graphic Novel',
    'Guide / How-To',
    'Historical Fiction',
    'History',
    'Horror',
    'Humour',
    'LGBTQ+',
    'Literary Fiction',
    'Memoir',
    'Mystery',
    'New Adult',
    'Parenting & Families',
    'Religion & Spirituality',
    'Romance',
    'Science & Technology',
    'Science Fiction',
    'Self-Help',
    'Short Story',
    'Thriller & Suspense',
    'Travel',
    'True Crime',
    'Young Adult'
  ];

  const handleChange = (event) => {
    setGenre(event.target.value);
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

  const renderedReviews = reviews.map(review => 
    <UserReviewsItem 
      key={review.id}
      id={review.book_id}
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
  );

  const renderedLists = lists.map(list => 
    <UserListsItem 
      key={list.id}
      id={list.book_id}
      title={list.title}
      cover_art_url={list.cover_art_url}
    />
  );
  
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