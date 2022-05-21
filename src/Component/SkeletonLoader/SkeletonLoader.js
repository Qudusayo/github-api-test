import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styles from "./SkeletonLoader.module.scss";

function SkeletonLoader() {
  return (
    <div className={styles.Card}>
      <SkeletonTheme baseColor="#acacac" highlightColor="#bdbdbd">
        <Skeleton width={150} height={150} />
        <div className={styles.CardInfo}>
          <Skeleton width={300} height={30} />
          <Skeleton height={70} />
          <div className={styles.CardInfoExtra}>
            <Skeleton width={150} height={25} />
            <Skeleton width={150} height={25} />
            <Skeleton width={150} height={25} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonLoader;
