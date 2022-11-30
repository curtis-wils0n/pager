import React from "react";

export default function useBookData(initial) {

  const [genre, setGenre] = React.useState();

  const handleChange = (event) => {
    setGenre(event.target.value);
  }
  // Replace with dynamic call to DB
  const genres = [
    'Action',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Manga',
    'Non-Fiction'
  ]

  return { genre, handleChange, genres }
}