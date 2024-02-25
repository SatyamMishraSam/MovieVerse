import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import noimagefound from "../../images/imagenotfound.jpg"

const HorizontalCards = ({ data, title }) => {
  // console.log(data);
  return (
    <div className="w-full p-5     ">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400 font-semibold ">
          {title && title}
        </h1>
      </div>
      <div className="w-[100%] flex overflow-y-hidden mb-5">
        {data.length > 0 ? (
          data.map((d, key) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={key}
              className=" min-w-[15%] bg-zinc-900 mr-5 mb-5"
            >
              <img
                className="w-full h-[45%] object-cover"
                src={d.backdrop_path || d.profile_path ?`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.profile_path
                }` :noimagefound}
              />
              <div className="text-white p-3 h-[55%] ">
                <h1 className="text-xl font-semibold ">
                  {d.title || d.original_name || d.original_title}
                </h1>
                <p className="">
                  {d.overview.slice(0, 50)}...{" "}
                  <Link className="text-blue-400">more</Link>{" "}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl text-white text-center mt-5">
            {" "}
            Nothing to Show
          </h1>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;
