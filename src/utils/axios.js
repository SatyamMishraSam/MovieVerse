import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3NjQzYzgwZjdlOTNhZDMzYTY4NmJkN2E3NzJkMyIsInN1YiI6IjYxYmIyOTVlMWM2MzI5MDAxZGM1MjcwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vDPAbC39l6FJf69etoV3DMay5P111kal-AXTGdAHu8I",
  },
});

export default instance;
    