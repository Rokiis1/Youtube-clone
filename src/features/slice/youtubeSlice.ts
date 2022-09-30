import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../../interfaces/Types";
import { getHomePageVideos } from "../api/getHomePageVideos";
import { getRecommendedVideos } from "../api/getRecommendedVideos";
import { getSearchPageVideos } from "../api/getSearchPageVideos";
import { getVideoDetails } from "../api/getVideoDetails";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const youtubeSlice = createSlice({
  name: "youtubeState",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state: any, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state: any, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state: any, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
    builder.addCase(getVideoDetails.fulfilled, (state: any, action) => {
      state.currentPlaying = action.payload;
    });
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  youtubeSlice.actions;

export default youtubeSlice.reducer;
