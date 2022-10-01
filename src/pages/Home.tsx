import { useEffect, useState } from "react";
import { getHomePageVideos } from "../features/api/getHomePageVideos";
import { useAppDispatch, useAppSelector } from "../features/store/store";
import Navigation from "../layouts/Navigation";
import SideBar from "../layouts/SideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
import { HomePageVideos } from "../interfaces/Types";
import VideoCard from "../components/VideoCard";
import { clearVideos } from "../features/slice/youtubeSlice";

const Home = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeState.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Loading />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <VideoCard data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
