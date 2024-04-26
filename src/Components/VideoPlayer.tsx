import { useEffect, useState } from "react";
import "../scss/pagesStyle/VideoPlayer.scss";
import VideoStore from "../Zustand/VideoStore";
import Back from "./Back";
const VideoPlayer = () => {
  const { VideoData } = VideoStore();
  const [ele, setEle] = useState(false);
  useEffect(() => {
    // Check if VideoData.cast exists during the initial render
    if (VideoData.cast) {
      setEle(true);
    }
  }, []);
  return (
    <>
      <Back />
      <div className="video-player">
        <video controls>
          <source src={`${VideoData.source}`} />
        </video>
      </div>
      <div className="video-detail">
        <h2>{`${VideoData.title} `}</h2>
        {ele ? (
          <>
            <p>
              <span>Cast:</span>
              {`${VideoData.cast}`}
            </p>
            <p>
              <span>Genres:</span> {`${VideoData.genres}`}
            </p>
            <p>
              <span>Description: </span>
              {`${VideoData.extract}`}
            </p>
          </>
        ) : (
          <>
            <p>
              <span>Plot: </span> {VideoData.plot}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
