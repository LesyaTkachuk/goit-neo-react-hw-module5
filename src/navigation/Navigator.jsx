import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "src/components/Loader/Loader";

import ROUTES from "./routes";

const HomePage = lazy(() => import("src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("src/pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("src/pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("src/components/MovieReviews/MovieReviews")
);

const Navigator = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTES.MOVIES_PAGE} element={<MoviesPage />} />
        <Route path={ROUTES.MOVIE_DETAILS_PAGE} element={<MovieDetailsPage />}>
          <Route path={ROUTES.MOVIE_CAST} element={<MovieCast />} />
          <Route path={ROUTES.MOVIE_REVIEWS} element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Navigator;
