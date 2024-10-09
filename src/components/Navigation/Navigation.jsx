import { NavLink } from "react-router-dom";
import clsx from "clsx";
import ROUTES from "src/navigation/routes";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div className={css.container}>
      <NavLink className={buildLinkClass} to={ROUTES.HOME_PAGE}>
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to={ROUTES.MOVIES_PAGE}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
