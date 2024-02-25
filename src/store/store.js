import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import peopleReducer from "./reducers/peopleSlice";
import gptReducer from "./reducers/gptSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
    gpt: gptReducer,
  },
});
