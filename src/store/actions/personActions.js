import axios from "../../utils/axios";
import { addPeople } from "../reducers/peopleSlice";
export { removePeople } from "../reducers/peopleSlice";

// all the actions will be here
export const asyncAddpersons = (id) => async (dispatch, getState) => {
  try {
    // there are the details we want
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let entireDetails = {
      detail: detail.data,
      externalId: externalId.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };

    dispatch(addPeople(entireDetails));

    // console.log(entireDetails);
  } catch (error) {
    console.log(error);
  }
};
