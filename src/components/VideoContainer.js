import React, { useEffect, useState } from "react";
import Card from "./Card";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const result = await data.json();

    setVideos(result?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap gap-5 justify-center ">
      {videos.map((video) => (
        <Link key={video.id} to={'watch?v='+video.id}>
          <Card info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
