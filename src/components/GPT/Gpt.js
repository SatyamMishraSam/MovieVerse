import GptSearch from "./GptSearch";
import GptSuggestions from "./GptSuggestions";

const Gpt = () => {

  return (
    <>
      {" "}
      
      <div className="w-full">
        <GptSearch />
        <GptSuggestions />
      </div>
    </>
  );
};

export default Gpt;
