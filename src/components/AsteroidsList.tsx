"use client";

import React, { useEffect } from "react";
import { useAsteroidsListStore } from "@/hooks/useStore";
import AsteroidItem from "./AsteroidItem/AsteroidItem";

export const AsteroidsList = () => {
  const setAsteroidsList = useAsteroidsListStore(
    (state) => state.setAsteroidsList
  );
  const asteroidsList = useAsteroidsListStore((state) => state.asteroidsList);
  useEffect(() => {
    if (asteroidsList === undefined) setAsteroidsList();
  }, [asteroidsList]);

  return (
    <ul>
      {asteroidsList?.map(asteroid => 
        <AsteroidItem key={asteroid.id} data={asteroid}/>
      )}
    </ul>
  );
};

export default AsteroidsList;
