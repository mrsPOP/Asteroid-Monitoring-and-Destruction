import { AsteroidInfo } from "./types";

export interface AsteroidsListStoreType {
  renderedAsteroids: [] | undefined | AsteroidInfo[],
  notRenderedAsteroids: [] | undefined | AsteroidInfo[],
  setAsteroidsList: () => void,
  getMoreAsteroids: () => void,
}

export interface FilterStoreType {
  inKilometers: boolean,
  setInKilometers: (value: boolean) => void,
}

export interface CartStoreType {
  cart: Set<string>,
  setNewCartItem: (value: string) => void,
  removeFromCart: (value: string) => void,
}