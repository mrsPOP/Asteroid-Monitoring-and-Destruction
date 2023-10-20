"use client";

import { useAsteroidsListStore } from "@/hooks/useStore";
import AsteroidItem from "../AsteroidItem/AsteroidItem";
import styles from "./AsteroidsList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

export function AsteroidsList({
  notRenderedAstroids,
}: {
  notRenderedAstroids: AsteroidInfo[];
}) {
  const {
    renderedAsteroids,
    notRenderedAsteroids,
    setAsteroidsList,
    getMoreAsteroids,
  } = useAsteroidsListStore();
  useEffect(() => {
    if (!renderedAsteroids) {
      setAsteroidsList(notRenderedAstroids);
    }
  }, []);

  return (
    <div id="scrollableUl">
      <InfiniteScroll
        dataLength={renderedAsteroids?.length ? renderedAsteroids.length : 0}
        next={getMoreAsteroids}
        hasMore={
          notRenderedAsteroids && notRenderedAsteroids.length > 0 ? true : false
        }
        loader={<h4>Loading...</h4>}
      >
        <ul className={styles.list}>
          {renderedAsteroids?.map((asteroid) => (
            <AsteroidItem key={asteroid.id} data={asteroid} />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default AsteroidsList;
