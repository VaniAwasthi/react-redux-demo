export const fetchMovies = async () => {
  const response = await fetch('https://reactnative.dev/movies.json');
  const data = await response.json();
  return data;
};