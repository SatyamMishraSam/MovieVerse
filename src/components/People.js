import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const People = () => {
  document.title = "MovieVerse | People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);
      // console.log(data.results);
      setPeople(data.results);
    } catch (e) {
      console.log("Error is ", e);
    }
  };
  useEffect(() => {
    getPeople();
  }, []);

  return people.length > 0 ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center justify-between">
        <h1 className=" w-[10%] text-2xl  font-semibold text-zinc-200">
          <Link>
            <i
              onClick={() => navigate(-1)}
              className="  ri-arrow-left-line"
            ></i>{" "}
          </Link>
          People
        </h1>
        <TopNav />
      </div>
      <Cards data={people} title="person" />
    </div>
  ) : (
    <Loading />
  );
};

export default People;
