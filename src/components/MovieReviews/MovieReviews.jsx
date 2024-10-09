import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "src/services/api";
import { ERROR_TEXT } from "src/services/constants";

import Loader from "src/components/Loader/Loader";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async (movieId) => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results } = await api.fetchMovieReviews(movieId);
        setMovieReviews(results);
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
        <p className={css.error}>Ooops! Can not get movie reviews for now</p>
      )}
      {!isLoading &&
        !isError &&
        (movieReviews?.length ? (
          movieReviews.map(({ id, author, content }) => (
            <div key={id}>
              <h5>{author}</h5>
              <p>{content}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        ))}
    </div>
  );
};

export default MovieReviews;
