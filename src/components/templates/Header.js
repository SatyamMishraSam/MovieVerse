import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Header = ({ data }) => {
  //   console.log(data);
  return data ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%]  mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...{" "}
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>{" "}
      </p>

      <p className="text-white text-xl ">
        <i className="text-red-400  ri-megaphone-line"></i>{" "}
        {data.release_date || "No Information"}
        <i className=" text-red-400 ml-5 ri-album-line"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>

      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="p-4 bg-[#A45AD3] rounded-lg text-white  mt-5"
      >
        {" "}
        Watch Trailer
      </Link>
    </div>
  ) : (
    <Loading />
  );
};

export default Header;
