import { useState } from "react";
import useSeriesApi from "../CustomHooks/useSeriesApi";
import "../scss/pagesStyle/Webseries.scss";
import SeriesStore from "../Zustand/SeriesStore";
import { SeriesDataType, SeriesThumnailType } from "../Zustand/SeriesStore";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export type SeriesData = {
  id?: number;
  title?: string;
  genre?: string[];
  releaseYear?: number;
  seasons?: SeriesDataType[] | any;
  thumnail?: string;
};
const Webseries = () => {
  const navigator = useNavigate();
  const { setSeries, setSeriesThumnail } = SeriesStore();
  const { data } = useSeriesApi("http://localhost:3005/webSeries");
  const [detail, setDetail] = useState<number | null>(null);
  const handleOnclick = (index: number) => {
    const thumnail: SeriesThumnailType = {
      id: data[index]?.id ?? 0,
      thumnail: data[index]?.thumnail ?? "",
      title: data[index]?.title ?? "",
      releaseYear: data[index]?.releaseYear ?? 0,
    };
    setSeries(data[index].seasons);
    setSeriesThumnail(thumnail);
    navigator("/seriesseason");
  };
  return (
    <div className="series-section">
      <Navbar/>
      <div className="series-container">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="whole"
            onClick={() => handleOnclick(index)}
          >
            <div className="series-img">
              <img
                src={item.thumnail}
                onMouseEnter={() => {
                  setDetail(index);
                }}
              />
            </div>
            {detail === index && (
              <div className={`details`} onMouseOut={() => setDetail(null)}>
                <div className="series-img2">
                  <img src={`${item.thumnail}`} />
                  <p className="heading">{`${item.title} | ${item.releaseYear}`}</p>
                  <p className="cast">
                    <span>Genere: </span>
                    {`${item.genre}`}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webseries;
