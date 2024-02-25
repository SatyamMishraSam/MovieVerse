import { useSelector } from "react-redux";
import Cards from "../templates/Cards";
import { Link, useNavigate } from "react-router-dom";

const GptSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const navigate = useNavigate();

  if (!movieNames) return null;

  return (
    <>
      <div className="  bg-black text-white ">
       
        <div>
          {movieNames.map((movieName, index) => (
            <Cards
              key={movieName}
              title={movieName}
              data={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GptSuggestions;
