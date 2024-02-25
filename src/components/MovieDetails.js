import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddMovies, removeMovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import Cards from "./templates/Cards";
import HorizontalCards from "./templates/HorizontalCards";
import noimagefound from "../images/imagenotfound.jpg";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { info } = useSelector((store) => store.movie);
  // console.log(info);

  useEffect(() => {
    dispatch(asyncAddMovies(id));
    return () => {
      dispatch(removeMovie);
    };
  }, [id]); //means whenever the id is getting changed call the component

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className=" relative w-screen h-[130vh] px-[10%]"
    >
      {/* External links    part */}
      <nav className=" h-[10vh]  items-center w-full  text-zinc-300 flex gap-10 text-2xl">
        <Link onClick={() => navigate(-1)}>
          <i className="  ri-arrow-left-line"></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info?.externalId?.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_40px_2px_rgba(0,0,0,.9)] h-[50vh]"
          src={
            info.detail.poster_path ||
            info.detail.profile_path ||
            info.detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path ||
                  info.detail.profile_path ||
                  info.detail.backdrop_path
                }`
              : noimagefound
          }
          alt=""
        />

        <div className="content ml-[5%]">
          <h1 className="text-5xl   text-white font-semibold ">
            {info.detail.name || info.detail.original_title}
            <small className=" ml-2 text-2xl font-bold text-zinc-300 ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className=" mt-3 mb-3 flex text-white gap-x-5 items-center">
            <span className="  rounded-full text-white bg-yellow-600 font-semibold w-[6vh] h-[6vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="text-yellow-600 w-[60px] leading-6 text-2xl">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>

            <h1>{info.detail.genres.map((g) => g.name).join(" , ")}</h1>
            <h1>{info.detail.runtime} mins</h1>
          </div>

          <h1 className="text-yellow-600 mt-5 text-2xl mb-3  "> Tagline</h1>
          <h1 className="text-xl font-semibold text-white italic mt-2 ">
            {" "}
            {info.detail.tagline}
          </h1>

          <h1 className="text-yellow-600 mt-5 mb-3 text-2xl  "> Overview</h1>
          <p className="text-white text-xl">{info.detail.overview}</p>

          <h1 className="text-yellow-600 mt-5 mb-3 text-2xl  ">
            {" "}
            Production Companies{" "}
          </h1>
          <p className="text-white text-xl">
            {info.detail.production_companies &&
              info.detail.production_companies.map((p) => p.name).join(" , ")}
          </p>

          <h1 className="text-yellow-600 mt-5 mb-3 text-2xl  ">
            {" "}
            Original Language{" "}
          </h1>
          <p className="text-white text-xl mb-5">
            {info.detail.original_language}
          </p>

          <Link
            className=" mt-10 px-10 py-5 bg-[#A45AD3] ml-10 rounded-lg "
            to={`${pathname}/trailer`}
          >
            <i className=" text-xl  text-white ri-play-fill"></i>{" "}
            <span className="text-white text-xl">Play Trailer</span>
          </Link>
        </div>
      </div>
      {/* watch Providers */}
      <div className="">
        {info.watchProviders &&
          info.watchProviders.flatrate &&
          info.watchProviders.flatrate.map((w, key) => (
            <img
              key={key}
              className="w-[5vh] h-[5vh] rounded-full object-cover "
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
            />
          ))}
      </div>
      {/* seasons  */}

      <h1 className="text-yellow-600 mt-5 mb-3 text-2xl">
        Recommendations and Similar{" "}
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
