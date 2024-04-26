import useMoviesApi from "../CustomHooks/useMoviesApi";
import "../scss/componentStyle/MoviesList.scss";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import VideoStore from "../Zustand/VideoStore";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const MoviesList = () => {
  const navigator = useNavigate();
  const { setVideoData } = VideoStore();
  const { data } = useMoviesApi();
  const [movielist, setMovielist] = useState<typeof data>();

  useEffect(() => {
    setMovielist(data);
  }, [data]);

  const handleClick = (index: number) => {
    setVideoData(data[index]);
    navigator("/videoplayer");
  };
  const finder = (a: string) => {
    console.log(a);
    const searchValue = a.trim().toLowerCase();
    const filteredValue = data.filter((item) => {
      return item.title.toLowerCase().includes(searchValue);
    });
    setMovielist(filteredValue);
  };
  return (
    <>
      <div className="movie-section">
        <Navbar />
        <div className="search-bar">
          <div>
            <CiSearch className="search-icon" />
            <input
              type="text"
              name=""
              onChange={(e) => finder(e.target.value)}
              placeholder="Movies"
            />
          </div>
        </div>
        <div className="data-container">
          {movielist?.length != 0 ? (
            <>
              {movielist?.map((item, index) => (
                <div
                  key={index}
                  className="data-item"
                  onClick={() => handleClick(index)}
                >
                  <div className="img-box">
                    <img src={`${item.thumbnail}`} />
                  </div>
                  <p className="heading">{`${item.title} | ${item.year}`}</p>
                </div>
              ))}{" "}
            </>
          ) : (
            <>
              <div className="not-found">No results found</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
