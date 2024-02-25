import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddpersons, removePeople } from "../store/actions/personActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cards from "./templates/Cards";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { info } = useSelector((store) => store.people);
  // console.log(info);

  useEffect(() => {
    dispatch(asyncAddpersons(id));
    return () => {
      dispatch(removePeople);
    };
  }, [id]); //means whenever the id is getting changed call the component

  return info ? (
    <div className="px-[10%] w-screen h-[170vh]  bg-[#1F1E24] flex flex-col">
      {/* Part 1  */}
      <nav className=" h-[10vh]  items-center w-full  text-zinc-300 flex gap-10 text-2xl">
        <Link onClick={() => navigate(-1)}>
          <i className="  ri-arrow-left-line"></i>
        </Link>

        {/*
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
       */}
      </nav>

      <div className="w-full flex ">
        {/* Poster details - down part*/}
        <div className="w-[20%] object-cover">
          <img
            className="shadow-[8px_17px_40px_2px_rgba(0,0,0,.9)] h-[35vh]"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path ||
              info.detail.profile_path ||
              info.detail.backdrop_path
            }`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-400" />

          <div className="text-white text-2xl flex gap-x-10 ">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalId.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal info */}
          <h1 className="text-2xl text-white font-semibold my-5">
            {" "}
            Personal Info
          </h1>

          <h1 className="text-white text-lg font-semibold">Known For</h1>
          <h1 className="text-red-400 ">{info.detail.known_for_department}</h1>

          <h1 className="text-white text-lg font-semibold mt-3">Gender</h1>
          <h1 className="text-red-400 ">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-white text-lg font-semibold mt-3">Birthday</h1>
          <h1 className="text-red-400 ">{info.detail.birthday}</h1>

          <h1 className="text-white text-lg font-semibold mt-3">Birth Place</h1>
          <h1 className="text-red-400 ">{info.detail.place_of_birth}</h1>
        </div>

        {/* details  right*/}

        <div className="w-[80%] ml-[5%] ">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {" "}
            {info.detail.name}
          </h1>

          <h1 className="text-zinc-400 text-2xl font-semibold">Biography</h1>
          <p className="text-red-400 mt-3  ">{info.detail.biography}</p>

          <h1 className="text-zinc-400 text-2xl font-semibold mt-3">
            Known For{" "}
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          
          <div className="flex">
            <div className="w-[15vh] flex justify-between">
              <h1 className="text-zinc-400 text-2xl font-semibold">
                {" "}
                Movie Acting
              </h1>
            </div>

            {info.movieCredits.cast && (
              <div className="w-[40vh] text-white h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700">
                {info.movieCredits.cast.map((c, i) => (
                  <li key={i} className="text-white p-5 rounded duration-300 cursor-pointer">
                    <Link to={`/movie/details/${c.id}`}>
                      <span>{c.name || c.title || c.original_title}</span>
                      <span className="block text-red-400">
                        {c.character && c.character}
                      </span>
                    </Link>
                  </li>
                ))}
              </div>
            )}

            <div className="w-[15vh] ml-[5%] flex justify-between">
              <h1 className="text-zinc-400 text-2xl font-semibold">
                {" "}
                Tv Acting
              </h1>
            </div>

            {info.tvCredits.cast && (
              <div className="w-[40vh] text-white h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700">
                {info.tvCredits.cast.map((c, i) => (
                  <li key={i} className="text-white p-5 rounded duration-300 cursor-pointer">
                    <Link to={`/tv/details/${c.id}`}>
                      <span>{c.name || c.title || c.original_title}</span>
                      <span className="block text-red-400">
                        {c.character && c.character}
                      </span>
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
