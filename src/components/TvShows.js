import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const TvShows = () => {
  document.title = "MovieVerse | Poular Tv Shows";
  const navigate = useNavigate();
  const [tv, setTv] = useState([]);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/popular`);
      // console.log(data.results);
      setTv(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };
  useEffect(() => {
    getTv();
  }, []);

  return tv.length > 0 ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center justify-between">
        <h1 className=" w-[10%] text-2xl  font-semibold text-zinc-200">
          <Link>
            <i
              onClick={() => navigate(-1)}
              className="  ri-arrow-left-line"
            ></i>{" "}
          </Link>
          Popular Tv Shows
        </h1>
        <TopNav />
      </div>
      <Cards data={tv} title="tv" />
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
