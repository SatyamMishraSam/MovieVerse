import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const Trending = () => {
    document.title="MovieVerse | Trending"
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/week?language=en-US`);
      // console.log(data.results);
      setTrending(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };
  useEffect(() => {
    getTrending();
  }, []);

  return trending.length > 0 ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center justify-between">
        <h1 className=" w-[10%] text-2xl  font-semibold text-zinc-200">
          <Link>
            <i
              onClick={() => navigate(-1)}
              className="  ri-arrow-left-line"
            ></i>{" "}
          </Link>
          Trending
        </h1>
        <TopNav />
      </div>
      <Cards data={trending} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
