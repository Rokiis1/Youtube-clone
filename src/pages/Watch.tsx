import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecommendedVideos } from "../features/api/getRecommendedVideos";
import { getVideoDetails } from "../features/api/getVideoDetails";
import { useAppDispatch, useAppSelector } from "../features/store/store";
import Navigation from "../layouts/Navigation";

const Watch = () => {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeState.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeState.recommendedVideos
  );
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-scree overflow-hidden">
          <div style={{ height: "7.5vh" }}>
            <Navigation />
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Watch;
