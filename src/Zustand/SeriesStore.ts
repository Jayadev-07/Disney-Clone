import { create } from "zustand";

export interface SeriesDataType {
  seasonName: string;
  numberOfEpisodes: number;
  description: string;
  rating: number;
  episodes: [
    {
      episodeNumber: number;
      title: string;
      duration: string;
      plot: string;
    },
  ];
}

export interface SeriesThumnailType {
  id: number;
  thumnail: string;
  title: string;
  releaseYear: number;
}

interface SeriesType {
  series: SeriesDataType[];
  seriesThumnail: SeriesThumnailType;
  setSeries: (data: SeriesDataType[]) => void;
  setSeriesThumnail: (data: SeriesThumnailType) => void;
}

const SeriesStore = create<SeriesType>((set) => ({
  series: [],
  seriesThumnail: {} as SeriesThumnailType,
  setSeries: (data: SeriesDataType[]) => set({ series: data }),
  setSeriesThumnail: (data: SeriesThumnailType) =>
    set({ seriesThumnail: data }),
}));

export default SeriesStore;
