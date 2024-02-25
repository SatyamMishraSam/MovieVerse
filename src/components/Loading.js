import React from "react";

const Loading = () => {
  return (
    <div  className="w-full  flex  justify-center items-center bg-black">
    <div className="relative flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
