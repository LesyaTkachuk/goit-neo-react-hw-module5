import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import css from "./Loader.module.css";

const Loader = ({ count = 10 }) => {
  return (
    <div className={css.container}>
      <SkeletonTheme baseColor="#444" highlightColor="#c0c0c0">
        <p className={css["flex-1"]}>
          <Skeleton className={css.line} count={count} height={30} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default Loader;
