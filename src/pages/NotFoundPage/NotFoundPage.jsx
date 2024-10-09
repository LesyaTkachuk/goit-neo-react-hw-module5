import OopsIcon from "src/assets/oops.png";
import { Link } from "react-router-dom";
import ROUTES from "src/navigation/routes";
import Button from "src/components/Button/Button";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img className={css.img} src={OopsIcon} alt="oops" />
      <p className={css.text}>Page not found</p>
      <Link to={ROUTES.HOME_PAGE}>
        <Button title="Go to Home page" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
