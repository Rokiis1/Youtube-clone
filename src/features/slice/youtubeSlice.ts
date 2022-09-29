import { createSlice } from "@reduxjs/toolkit";
import { InistialState } from "../../interfaces/Types";
import { getHomePageVideos } from "../api/getHomePageVideos";

const initialState: InistialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPagetoken: null,
  recommendedVideos: [],
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {});
  },
});

export default youtubeSlice.reducer;
