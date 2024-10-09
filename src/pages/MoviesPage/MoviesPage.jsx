import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "src/services/api";
import { ERROR_TEXT } from "src/services/constants";

import Loader from "src/components/Loader/Loader";
import MovieList from "src/components/MovieList/MovieList";
import SearchForm from "src/components/SearchForm/SearchForm";
import ContainerWithNavigation from "src/components/ContainerWithNavigation/ContainerWithNavigation";

import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const [searchValue, setSearchValue] = useState(search);

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSearch = (value) => {
    if (!value) return;
    setSearchParams({ search: value });
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;

    const getMoviesList = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results } = await api.fetchMoviesByTitle(searchValue);
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
  }, [searchValue]);

  useEffect(() => {
    if (search != searchValue) {
      setSearchValue(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <ContainerWithNavigation>
      <div className={css.container}>
        <SearchForm searchValue={searchValue} onSearch={onSearch} />
        {isLoading && <Loader />}
        {isError && <p>We could not get movie list at the moment</p>}
        {!isLoading &&
          !isError &&
          (movies?.length ? (
            <MovieList movies={movies} />
          ) : (
            <p>No movies found</p>
          ))}
      </div>
    </ContainerWithNavigation>
  );
};

export default MoviesPage;
