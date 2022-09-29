import { useEffect } from "react";
import { getHomePageVideos } from "../features/api/getHomePageVideos";
import { useAppDispatch, useAppSelector } from "../features/store/store";
import Navigation from "../layouts/Navigation";
import SideBar from "../layouts/SideBar";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeState.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navigation />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
