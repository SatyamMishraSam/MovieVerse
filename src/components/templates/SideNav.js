import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i className=" text-[#A45AD3] ri-movie-2-fill mr-2"></i>
        {/* <path d="M18.001 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.2712 20.4293 18.1755 18.001 20ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14ZM16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"></path> */}

        <span className=" text-[#A45AD3] text-2xl">MovieVerse</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl "
        >
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl "
        >
          <i className="ri-bard-fill mr-2"></i> Popular{" "}
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl "
        >
          <i className="ri-movie-line mr-2"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl "
        >
          <i className="ri-tv-line mr-2"></i> Tv Shows
        </Link>
        <Link
          to={"/people"}
          className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl "
        >
          <i className="ri-team-fill mr-2"></i> People
        </Link>
        <Link
          to={"/gpt"}
          className="hover:bg-[red] hover:text-white duration-300 p-5 rounded-lg text-xl text-red-700 "
        >
          <i className="ri-reactjs-line mr-2"></i>GPT Search
        </Link>
      </nav>

      <hr className="h-[1px] bg-zinc-300" />

      <nav className="flex flex-col text-zinc-400 gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Information
        </h1>
        <Link className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl ">
          <i className="ri-at-line mr-2"></i> About Us
        </Link>
        <Link className="hover:bg-[#A45AD3] hover:text-white duration-300 p-5 rounded-lg text-xl ">
          <i className="ri-contacts-line mr-2"></i> Contact Us{" "}
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
