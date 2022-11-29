import StarRating from "../components/StarRating.js";
import Recommended from "../components/Recommended";
import NotRecommended from "../components/NotRecommended";

export default function Reviews() {
  return (
    <div>
    <p>This is the page where we put our reviews!</p>
    <NotRecommended />
    <Recommended />
    <StarRating />
    </div>
  );
}