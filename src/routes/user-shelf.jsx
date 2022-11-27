import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../components/StarRating.js";

export default function Shelf() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookURL = '/api/books';
    Promise.all([
      axios.get(bookURL)
    ]).then((all) => {
      setBooks(all[0].data);
    })
  }, []);

  return (
    <ul>
      {Object.keys(books).map((book) => <li>{books[book].title} ({books[book].year}) by {books[book].author_name}, published by {books[book].publisher_name} ({books[book].location})</li>)}
    </ul>
  );
}