import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const Home = () => {
  document.title = "MovieVerse | Home Page";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState("");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`); //it will give the trending movies of the day
      // console.log(data);
      // Now we have the 20 array of objects so we want to show the randon data on each refersh

      const randonData =
        data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randonData); //now we will get the random movies
      setWallpaper(randonData);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  const trendingMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`); //it will give the trending movies of the day
      setTrending(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && trendingMovies();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />

      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending} title={"Trending"} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
