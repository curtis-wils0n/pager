import { React, useState, useEffect } from 'react'
import axios from "axios";

function BookListTest(props) {

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
      {Object.keys(books).map((book) => <li>{books[book].title} </li>)}
    </ul>
  )
}

export default BookListTest;