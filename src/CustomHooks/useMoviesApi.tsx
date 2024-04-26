import axios from "axios";
import React, { useState } from "react";
import { IVideoType } from "../Zustand/VideoStore";

const useMoviesApi = () => {
  const [data, setData] = useState<IVideoType[]>([]);
  const [error, setError] = useState();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await axios.get(`http://localhost:3001/movies`);
        setData(response.data);
      } catch (error: any) {
        setError(error); // Set error state with the caught error
      }
    };

    fetchData();
  }, []);

  if (error) {
    throw new Error("error occurs");
  }

  return { data };
};

export default useMoviesApi;
