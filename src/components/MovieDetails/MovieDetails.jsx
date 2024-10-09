import { IMAGE_URL, DEFAULT_POSTER_URL } from "src/services/constants";
import css from "./MovieDetails.module.css";

const MovieDetails = ({
  imgPath,
  title,
  releaseDate,
  score,
  overview,
  genres,
}) => {

  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={imgPath ? `${IMAGE_URL}w500/${imgPath}` : DEFAULT_POSTER_URL}
        alt="film poster"
      />
      <div className={css.info}>
        <h3 className={css.title}>
          {title} {releaseDate ? `(${releaseDate.slice(0, 4)})` : ""}{" "}
        </h3>
        <p>User score: {score ? Math.round(score * 10) + "%" : "-"}</p>
        <p className={css.subtitle}>Overview</p>
        <p>{overview || "-"}</p>
        <p className={css.subtitle}>Genres</p>
        {genres?.length ? (
          <p>
            {genres?.map(({ id, name }) => (
              <span key={id}>{name + " "}</span>
            ))}
          </p>
        ) : (
          <p>-</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
