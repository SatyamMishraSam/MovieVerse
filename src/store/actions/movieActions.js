import axios from "../../utils/axios";
import { addMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

// all the actions will be here
export const asyncAddMovies = (id) => async (dispatch, getState) => {
  try {
    // there are the details we want
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

    let entireDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    dispatch(addMovie(entireDetails))
    
    // console.log(entireDetails);
  } catch (error) {
    console.log(error);
  }
};
