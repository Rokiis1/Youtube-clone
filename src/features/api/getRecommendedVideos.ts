import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { RecommendedVideos } from "../../interfaces/Types";
import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../config/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtubeState/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
      youtubeState: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState() as RootState;

    const {
      data: { items },
    } = await axios.get(
      `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const parsedData: RecommendedVideos[] | undefined =
      await parseRecommendedData(items, videoId);

    return { parsedData };
  }
);
