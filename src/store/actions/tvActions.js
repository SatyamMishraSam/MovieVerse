import axios from "../../utils/axios";
import { addTv } from "../reducers/tvSlice";
export { removeTv } from "../reducers/tvSlice";

// all the actions will be here
export const asyncAddTv = (id) => async (dispatch, getState) => {
  try {
    // there are the details we want
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);

    let entireDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    dispatch(addTv(entireDetails))
    
    // console.log(entireDetails);
  } catch (error) {
    console.log(error);
  }
};
