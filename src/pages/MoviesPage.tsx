import useMoviesApi from "../CustomHooks/useMoviesApi";
import "../scss/componentStyle/MoviesList.scss";
import { useEffect, useState } from "react";
import VideoStore from "../Zustand/VideoStore";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { shuffle } from "lodash";

const MoviesPage = () => {
  const navigator = useNavigate();
  const { setVideoData } = VideoStore();
  const { data } = useMoviesApi();
  const [movielist, setMovielist] = useState<typeof data>();
  useEffect(() => {
    setMovielist(shuffle(data));
  }, [data]);

  const handleClick = (index: number) => {
    setVideoData(data[index]);
    navigator("/videoplayer");
  };
  return (
    <>
      <div className="movie-section">
        <Navbar />
        <div className="data-container">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
