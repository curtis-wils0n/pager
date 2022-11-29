import React, { useState, useEffect } from "react";
import UserShelfItem from "./UserShelfItem";
import Form from "../components/Form"
import axios from "axios";
import SearchBar from '../components/SearchBar'

export default function Shelf() {

  function transformBookData(data) {
    console.log(Object.values(data))
    return Object.values(data)
  }
  
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
    <SearchBar bookData={() => transformBookData(books)} />
      <Form/>
      <ul>
        {renderedUserShelf}
      </ul>
    </>  
  );
}