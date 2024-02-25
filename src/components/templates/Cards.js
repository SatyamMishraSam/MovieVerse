import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import noimage from "../../noimage.jpg";
import imagenotfound from "../../images/imagenotfound.jpg"

const Cards = ({ data, title }) => {
  // console.log("The data is " + data);
  return data ? (
    <div className="flex flex-wrap w-[full]">
      {data.map((d, key) => (
        <Link
          to={`/${d.media_type || title}/details/${d.id}`}
          className=" relative w-[25vh] m-[3%] mb-[5%] "
          key={key}
        >
           
          <img
            className="shadow-[8px_17px_40px_2px_rgba(0,0,0,.4)]"
            src={
             
              d.profile_path || d.poster_path || d.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                d.profile_path || d.poster_path || d.backdrop_path
                }`
              : imagenotfound
            }
            alt=""
          />

          <h1 className="text-2xl   text-zinc-400 font-semibold">
            {d.name || d.original_title}
          </h1>
          {d.vote_average>0 && (
            <div className=" absolute right-[-10%] bottom-[25%] rounded-full text-white bg-yellow-600 font-semibold w-[6vh] h-[6vh] flex justify-center items-center">
              {(d.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
