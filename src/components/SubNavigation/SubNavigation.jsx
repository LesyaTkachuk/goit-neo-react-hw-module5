import { NavLink } from "react-router-dom";
import clsx from "clsx";
import ROUTES from "src/navigation/routes";
import css from "./SubNavigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const SubNavigation = () => {
  return (
    <div className={css.container}>
      <NavLink className={buildLinkClass} to={ROUTES.MOVIE_CAST}>
        Cast
      </NavLink>
      <NavLink className={buildLinkClass} to={ROUTES.MOVIE_REVIEWS}>
        Reviews
      </NavLink>
    </div>
  );
};

export default SubNavigation;
