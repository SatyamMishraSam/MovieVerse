import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    addPeople: (state, action) => {
      state.info = action.payload;
    },
    removePeople: (state, action) => {
      state.info = null;
    },
  },
});

export const {addPeople, removePeople} = peopleSlice.actions;
export default peopleSlice.reducer
