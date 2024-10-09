import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "src/services/api";
import { ERROR_TEXT, IMAGE_URL, DEFAULT_IMG_URL } from "src/services/constants";

import Loader from "src/components/Loader/Loader";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async (movieId) => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { cast } = await api.fetchMovieCast(movieId);
        setMovieCast(cast?.length >= 10 ? cast.slice(0, 10) : cast);
        // eslint-disable-next-line no-unused-vars
      } catch (e) {
        setIsError(true);
        toast.error(ERROR_TEXT);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {isLoading && <Loader count={3} />}
      {isError && (
        <p className={css.error}>Ooops! Can not get movie cast for now</p>
      )}
      {!isLoading &&
        !isError &&
        (movieCast?.length ? (
          <ul className={css.list}>
            {movieCast.map(({ id, name, character, profile_path }) => (
              <li className={css.item} key={id}>
                <img
                  className={css.img}
                  src={
                    profile_path
                      ? `${IMAGE_URL}w200/${profile_path}`
                      : DEFAULT_IMG_URL
                  }
                  alt="actor poster"
                />

                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no information about the movie cast</p>
        ))}
    </div>
  );
};

export default MovieCast;
