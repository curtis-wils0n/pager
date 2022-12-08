import React from 'react';
import useAPIData from '../hooks/useAPIData';
import { Grid } from "@mui/material";

/**
 * A homepage view for a logged-in user
 * @param {*} props 
 * @returns JSX Functional Component
 */
export default function Dashboard(props) {

  const {
    renderedAllReviews,
    renderedUserShelf
  } = useAPIData();

  return (
    <>
      <h1 className="page-header">Top Reviews</h1>
      <div class="review-container">
        {renderedAllReviews}
      </div>
      <h1 className="page-header-books">Popular Books</h1>
      <div>
        <Grid item xs={12}>
          <div className="book-container">
            {renderedUserShelf.map(book => (
              <img 
                className="book-container-item"
                alt={book.props.title}
                src={book.props.book_cover_art_url}
              />
            ))}
          </div>
        </Grid>
      </div>
      <h1 className="page-header-lists">Check out these lists!</h1>
      <div class="fake-list-title">
        <a href="/dashboard" className="list-link"><strong>Chloe's top books of the year</strong></a>
        <a href="/dashboard" className="list-link"><strong>Must reads!!</strong></a>
      </div>
      <div class="dash-list">
        <img class="list-image" src="https://i.imgur.com/QLsAXRx.png" alt=""/>
        <img class="list-image" src="https://i.imgur.com/3W7RI64.png" alt=""/>
      </div>
    </>
  )
}