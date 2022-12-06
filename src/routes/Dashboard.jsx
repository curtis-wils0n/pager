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
    <h1 className="page-header">Popular Books</h1>
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
</>
  )
  }