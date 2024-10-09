import { useEffect, useState, useRef } from "react";
import { Suspense } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";

import api from "src/services/api";
import { ERROR_TEXT } from "src/services/constants";
import ROUTES from "src/navigation/routes";

import Button from "src/components/Button/Button";
import Loader from "src/components/Loader/Loader";
import MovieDetails from "src/components/MovieDetails/MovieDetails";
import SubNavigation from "src/components/SubNavigation/SubNavigation";
import ContainerWithNavigation from "src/components/ContainerWithNavigation/ContainerWithNavigation";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state ?? ROUTES.MOVIES_PAGE);

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async (movieId) => {
      try {
        setIsLoading(true);
        setIsError(false);

        const result = await api.fetchMovieDetails(movieId);
        setMovieDetails(result);
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
    <ContainerWithNavigation>
      <div className={css.container}>
        {isLoading && <Loader />}
        {isError && (
          <p>Something went wrong. We can not get film details at the moment</p>
        )}
        {!isLoading && !!movieDetails && (
          <>
            <Link to={backLinkHref.current}>
              <Button title="Go back" icon={<IoMdArrowRoundBack />} />
            </Link>

            <MovieDetails
              imgPath={movieDetails?.poster_path}
              title={movieDetails?.title}
              releaseDate={movieDetails?.release_date}
              score={movieDetails?.vote_average}
              overview={movieDetails?.overview}
              genres={movieDetails?.genres}
            />
            <SubNavigation />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </div>
    </ContainerWithNavigation>
  );
};

export default MovieDetailsPage;
