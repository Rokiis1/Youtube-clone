import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { RootState } from "../store/store";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeState/homePage/Videos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeState: { nextPagetoken: nextPagetokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPagetoken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`
    );
    console.log(items);
  }
);
