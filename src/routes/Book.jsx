import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <img
        className="book-cover"
        src={book.cover_art_url}
        alt={book.title}
        width='200'
        height='300'
      />
      <p>{book.title} ({book.year}) by {book.author_name}</p>
      <p>Published by {book.publisher_name} ({book.location})</p>
      <p>{book.description}</p>
    </>
  )
}