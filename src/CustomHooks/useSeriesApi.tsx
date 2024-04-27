import axios from "axios";
import { useEffect, useState } from "react";
import { SeriesData } from "../Components/Webseries";
const useSeriesApi = (url: string) => {
  const [data, setData] = useState<SeriesData[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const FetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return { data, error, isLoading };
};

export default useSeriesApi;
