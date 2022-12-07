import useAPIData from '../hooks/useAPIData';
import { Grid } from "@mui/material";
 
 export default function Dashboard() {

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
   <p><strong>Chloe's top books of the year</strong></p>
   <p><strong>Must reads!!</strong></p>
   </div>
   <div class="dash-list">
    <img class="list-image" src="https://i.imgur.com/QLsAXRx.png" alt=""/>
    <img class="list-image" src="https://i.imgur.com/3W7RI64.png" alt=""/>
    </div>
</>
  )
  }