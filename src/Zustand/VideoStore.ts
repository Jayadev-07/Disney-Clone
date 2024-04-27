import { create } from "zustand";

export interface IVideoType {
  title: string;
  year?: number;
  cast?: string[];
  genres: string[];
  extract: string;
  source: string;
  id?: string;
  thumbnail?: string;
  plot?: string;
  duration?: string;
}

interface IVideoData {
  VideoData: IVideoType;
  setVideoData: (data: IVideoType) => void;
}

const VideoStore = create<IVideoData>((set) => ({
  VideoData: {
    title: "",
    year: -1,
    cast: [],
    genres: [],
    extract: "",
    source: "",
    id: "",
    thumbnail: "",
    plot: "",
  },
  setVideoData: (data: IVideoType) => set({ VideoData: data }),
}));

export default VideoStore;
