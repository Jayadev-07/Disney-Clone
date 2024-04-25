import { useState } from "react";
import SeriesStore from "../Zustand/SeriesStore";
import "../scss/pagesStyle/WebseriesContent.scss";
import VideoStore from "../Zustand/VideoStore";
import { useNavigate } from "react-router-dom";
import Back from "./Back";
const WebseriesContent = () => {
  const navigator = useNavigate();
  const { setVideoData } = VideoStore();
  const { series, seriesThumnail } = SeriesStore();
  console.log(series);
  console.log(seriesThumnail);
  const [episode, setEpisode] = useState(series[0].episodes);
  const [index, setIndex] = useState<number>(0);
  console.log(episode);
  const RedirectFunc = (ele: any) => {
    setVideoData(ele);
    navigator("/videoplayer");
  };
  const Episodeset = (index: number) => {
    setEpisode(series[index].episodes);
    setIndex(index);
  };
  return (
    <div className="season-section">
      <Back />
      <div className="season-holder">
        {series.map((item, index) => (
          <div
            key={index}
            className="series-seasons"
            onClick={() => Episodeset(index)}
          >
            <h3>
              {item.seasonName} <span>Episodes-</span>
              {item.numberOfEpisodes}
            </h3>
            <p>{item.description}</p>
            <p>{item.rating}/10</p>
          </div>
        ))}
      </div>
      <div className="episode-container">
        <h1>Season {index + 1}</h1>
        <div>
          {episode.map((ele) => (
            <>
              <div className="episodes">
                <h3>
                  Episode {ele.episodeNumber} {ele.title}
                </h3>
                <p>
                  <span>Plot: </span>
                  {ele.plot}
                </p>
                <p>
                  <span>Duration: </span>
                  {ele.duration}
                </p>
                <button onClick={() => RedirectFunc(ele)}>Watch Now</button>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className="details">
        <div>
          <div className="img-div">
            <img src={seriesThumnail.thumnail} />
          </div>
          <p>
            {seriesThumnail.title} | {seriesThumnail.releaseYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebseriesContent;
