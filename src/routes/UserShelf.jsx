import React, { useState, useEffect } from "react";
import UserShelfItem from "./UserShelfItem";
import Form from "../components/Form"
import axios from "axios";

export default function Shelf() {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookURL = '/api/books';
    Promise.all([
      axios.get(bookURL)
    ]).then((all) => {
      setBooks(all[0].data);
    });
  }, []);

  const renderedUserShelf = Object.keys(books).map((book) => {
    const indvBook = books[book];
    return <UserShelfItem
      key={indvBook.id}
      title={indvBook.title}
      book_cover_art_url={indvBook.cover_art_url}
      author={indvBook.author_name}
      year={indvBook.year}
    />
  }

  )

  return (
    <>
      <Form/>
      <ul>
        {renderedUserShelf}
      </ul>
    </>  
      
  );
}