import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../config/constants";
import { HomePageVideos } from "../../interfaces/Types";
import { parseData } from "../../utils";
import { RootState } from "../store/store";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeState/searchPageVidoes",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeState: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q=""&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    const parsedData: HomePageVideos[] | undefined = await parseData(items);
    return { parsedData: [...videos, ...parsedData!], nextPageToken };
  }
);
