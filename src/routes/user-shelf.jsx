import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import SearchBar from '../components/SearchBar';

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
    <div>
    <ul>
      {Object.keys(books).map((book) => <li>{books[book].title} ({books[book].year}) by {books[book].author_name}, published by {books[book].publisher_name} ({books[book].location})</li>)}
    </ul>
            <Button variant="contained">Add book</Button>
      <SearchBar />
    </div>
  );
}