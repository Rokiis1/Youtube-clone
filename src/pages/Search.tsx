import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/store/store";
import Navigation from "../layouts/Navigation";
import SideBar from "../layouts/SideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
import { HomePageVideos } from "../interfaces/Types";
import VideoCard from "../components/VideoCard";
import { clearVideos } from "../features/slice/youtubeSlice";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../features/api/getSearchPageVideos";
import SearchCard from "../components/SearchCard";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeState.videos);
  const searchTerm = useAppSelector((state) => state.youtubeState.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navigation />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
        <div className="py-8 pl-8 flex flex-col gap-5 w-full">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Loading />}
              height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId} />{" "}
                  </div>
                );
              })}
            </InfiniteScroll>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
