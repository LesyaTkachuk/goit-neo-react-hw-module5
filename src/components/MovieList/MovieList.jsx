import { NavLink } from "react-router-dom";
import { generatePath, useLocation } from "react-router-dom";

import ROUTES from "src/navigation/routes";
import { DEFAULT_IMG_URL, IMAGE_URL } from "src/services/constants";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, backdrop_path }) => (
        <li className={css.item} key={id}>
          <NavLink
            className={css.link}
            to={generatePath(ROUTES.MOVIE_DETAILS_PAGE, {
              movieId: id,
            })}
            state={location}
          >
            <img
              className={css.img}
              src={
                backdrop_path
                  ? `${IMAGE_URL}w400/${backdrop_path}`
                  : DEFAULT_IMG_URL
              }
              alt="film poster"
            />
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
