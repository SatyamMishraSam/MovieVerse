import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state, action) => {
      state.info = null;
    },
  },
});

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer
