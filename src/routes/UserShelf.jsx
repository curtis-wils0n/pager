import React, { useState, useEffect } from "react";
import UserShelfItem from "./UserShelfItem";
import FormTemplate from "../components/Form/FormTemplate"
import axios from "axios";

export default function UserShelf() {
  
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


  return (
    <>
      <FormTemplate
        type="books"
      />
      <ul>
        {renderedUserShelf}
      </ul>
    </>  
  );
}