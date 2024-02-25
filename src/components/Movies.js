import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const Movies = () => {
  document.title = "MovieVerse | Now Playing Movies";
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`movie/now_playing`);
      // console.log(data.results);
      setMovies(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return movies.length > 0 ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center justify-between">
        <h1 className=" w-[10%] text-2xl  font-semibold text-zinc-200">
          <Link>
            <i
              onClick={() => navigate(-1)}
              className="  ri-arrow-left-line"
            ></i>{" "}
          </Link>
          Now Playing Movies
        </h1>
        <TopNav />
      </div>
      <Cards data={movies} title="movie" />
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
