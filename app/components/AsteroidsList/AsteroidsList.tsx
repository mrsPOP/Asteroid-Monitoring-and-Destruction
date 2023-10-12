"use client";

import React, { useEffect } from "react";
import { useAsteroidsListStore } from "@/hooks/useStore";
import AsteroidItem from "../AsteroidItem/AsteroidItem";
import styles from "./AsteroidsList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

export const AsteroidsList = () => {
  const setAsteroidsList = useAsteroidsListStore(
    (state) => state.setAsteroidsList
  );
  const { renderedAsteroids, notRenderedAsteroids, getMoreAsteroids } =
    useAsteroidsListStore();

  useEffect(() => {
    if (renderedAsteroids === undefined) setAsteroidsList();
  }, [renderedAsteroids]);

  return (
    <div id="scrollableUl">
      <InfiniteScroll
        dataLength={renderedAsteroids?.length ? renderedAsteroids.length : 0}
        next={getMoreAsteroids}
        hasMore={
          notRenderedAsteroids && notRenderedAsteroids.length > 0 ? true : false
        }
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ul className={styles.list}>
          {renderedAsteroids?.map((asteroid) => (
            <AsteroidItem key={asteroid.id} data={asteroid} />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default AsteroidsList;
