import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);
  // console.log(pathname, tvVideo);
  return (
    <div className=" z-[100] bg-[rgba(0,0,0,.9)] absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link onClick={() => navigate(-1)}>
        <i className=" absolute text-3xl text-white right-[5%] top-[5%]  ri-close-fill"></i>
      </Link>
      <ReactPlayer
      controls
        height={800}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
      />
    </div>
  );
};

export default Trailer;
