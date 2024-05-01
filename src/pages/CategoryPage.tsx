import Navbar from "../Components/Navbar";
import "../scss/pagesStyle/CategoryPage.scss";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div className="cat-section">
      <Navbar />
      <div className="cat-container">
        <div className="movies-div">
          <Link to="/movies">
            <div className="img-div">
              <img src="https://sm.mashable.com/t/mashable_in/photo/default/movies-featuring-popular-hindi-songs-copy_8bmt.720.jpg" />
            </div>
          </Link>
          <h2>Movies</h2>
        </div>
        <div className="series-div">
          <Link to="/series">
            <div className="img-div">
              <img src="https://i.pinimg.com/originals/fb/52/8f/fb528f1fdc1ac1d21b01dd84079c9a24.png" />
            </div>
          </Link>
          <h2>Series</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
