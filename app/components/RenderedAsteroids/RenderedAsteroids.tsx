import AsteroidItem from "../AsteroidItem/AsteroidItem";
import styles from "./RenderedAsteroids.module.css"

const RenderedAsteroids = async ({firstStaticAsteroidsData}: {firstStaticAsteroidsData: AsteroidInfo[]}) => {

  return (
    <ul className={styles.list}>
      {firstStaticAsteroidsData?.map((asteroid) => (
        <AsteroidItem key={asteroid.id} data={asteroid} />
      ))}
    </ul>
  );
};

export default RenderedAsteroids;
