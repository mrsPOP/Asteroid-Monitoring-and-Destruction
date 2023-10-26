import AsteroidItem from "../AsteroidItem/AsteroidItem";
import styles from "./StaticAsteroids.module.css"

const StaticAsteroids = ({firstStaticAsteroidsData}: {firstStaticAsteroidsData: AsteroidInfo[]}) => {

  return (
    <ul className={styles.list}>
      {firstStaticAsteroidsData?.map((asteroid) => (
        <AsteroidItem key={asteroid.id} data={asteroid} />
      ))}
    </ul>
  );
};

export default StaticAsteroids;
