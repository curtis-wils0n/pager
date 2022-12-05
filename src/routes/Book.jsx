import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormReviews from "../components/Form/FormReviews";
import axios from "axios";

import '../styles/Book.css'

export default function Book (props) {

  let {id} = useParams();
  const [book, setBook] = useState(<Book />);

  useEffect(() => {
    window.scrollTo(0, 0);
    Promise.all([
      axios.get(`/api/books/${id}`)
    ]).then((all) => {
      setBook(all[0].data[0]);
    });
  }, [id])

  return (
    <>
      <div className="book-bg">
        <div>
          <img
            id='book-view'
            src={book.cover_art_url}
            alt={book.title}
            width='200'
            height='300'
          />
        </div>
        <div id="book-info">
          <h1>{book.title} ({book.year})</h1>
          <h2>{book.author_name}</h2>
          <p>Published by {book.publisher_name} ({book.location})</p>
          <p><i>{book.description}</i></p>
        </div>
      </div>
      {/* TODO: Add props for bookid, userid */}
      <FormReviews />
    </>
  )
}