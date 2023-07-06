import { BASE_URL } from "../utils";

export const fetchData = async (endpoint, method, payload) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method,
    data: payload,
  });
  const data = await response.json();
  return data;
};
