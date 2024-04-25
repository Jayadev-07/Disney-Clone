import useMoviesApi from "../CustomHooks/useMoviesApi";
import "../scss/componentStyle/MoviesList.scss";
import Navbar from "./Navbar";
import { useState } from "react";
import VideoStore from "../Zustand/VideoStore";
import { useNavigate } from "react-router-dom";
const MoviesList = () => {
  const navigator = useNavigate();
  const { setVideoData} = VideoStore();
  const [detail,setDetail]=useState<number | null >(null)
  const { data } = useMoviesApi();

  const handleClick = (index:number) => {
    setVideoData(data[index]);
    navigator('/videoplayer')
  }
  
  return (
    <>
      <Navbar />
      <div className="data-container" >
        {data.map((item, index) => (
          <div key={index} className="data-item" onClick={()=>handleClick(index)}>
            <img src={`${item.thumbnail}`} onMouseEnter={()=>{setDetail(index)}}  />
            {detail === index && (
            <div className={`details`} onMouseOut={()=>setDetail(null)}>
              <img src={`${item.thumbnail}`} />
              <p className="heading">{`${item.title} | ${item.year}`}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
