import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {

  const[books, setBooks] = useState([]);

  useEffect(() => {
    const bookURL = '/api/books';
    Promise.all([
      axios.get(bookURL)
    ]).then((all) => {
      setBooks(all[0].data);
    })
  }, []);

  const bookList = [];
  for (const book of Object.keys(books)) {
    if (books[book].name !== null) {
      bookList.push(books[book].name);
    }
  }

  return (
    <div className="App">
      <li>{bookList}</li>
    </div>
  );
}

export default App;
