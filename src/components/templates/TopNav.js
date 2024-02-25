import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../noimage.jpg";

const TopNav = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${search}`);
      // console.log(data);
      setSearchResults(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };
  useEffect(() => {
    getSearches();
  }, [search]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i className=" text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-[40%] mx-10 p-5 border-none outline-none bg-zinc-700 text-white rounded-lg"
        type="text"
        placeholder="Search here..."
      />
      {search.length > 0 && (
        <i
          onClick={() => setSearch("")}
          className=" text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className=" z-[100] absolute w-[40%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded">
        {searchResults.map((search, key) => (
          <Link to={`/${search.media_type}/details/${search.id}`}
            key={key}
            className=" hover:text-zinc-800 hover:bg-zinc-300 duration-300 flex font-semibold text-zinc-700 w-[100%] p-10 justify-start items-center border-b-2 border-zinc-100 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-10 shadow-lg"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>{search.name || search.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
