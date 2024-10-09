import { useEffect, useState } from "react";

import api from "src/services/api";
import { ERROR_TEXT } from "src/services/constants";
import { toast } from "react-toastify";

import ContainerWithNavigation from "src/components/ContainerWithNavigation/ContainerWithNavigation";
import MovieList from "src/components/MovieList/MovieList";
import Loader from "src/components/Loader/Loader";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results } = await api.fetchTrendingMovies();
        setMovies(results);
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        setIsError(true);
        toast.error(ERROR_TEXT);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesList();
  }, []);

  return (
    <ContainerWithNavigation>
      <div className={css.container}>
        <h2>Trending today</h2>
        {isLoading && <Loader />}
        {isError && (
          <p>Something went wrong. We can not get the list of trending movies</p>
        )}
        {!isLoading && !isError && !!movies?.length && (
          <MovieList movies={movies} />
        )}
      </div>
    </ContainerWithNavigation>
  );
};

export default HomePage;
