import { BASE_URL, MOVIE_DETAIL_URL } from "../utils";
import axios from "axios";

export const fetchData = async (endpoint, method, payload) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method,
    data: payload,
  });
  const data = await response.json();
  return data;
};
export const fetchDetails = async (endpoint) => {
  const response = await fetch(`${MOVIE_DETAIL_URL}${endpoint}`);
  const data = await response.json();
  console.log("fetchdeatailresponse", data);
  return data;
};

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});
