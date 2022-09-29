export interface InistialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchTerm: string;
  searchResults: [];
  nextPagetoken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}

export interface CurrentPlaying {}

export interface RecommendedVideos {}
