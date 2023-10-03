import { AsteroidInfo } from "./types";

export interface AsteroidsListStoreType {
  asteroidsList: [] | undefined | AsteroidInfo[],
  setAsteroidsList: () => void,
}

export interface FilterStoreType {
  inKilometers: boolean,
  setInKilometers: (value: boolean) => void,
}

export interface CartStoreType {
  cart: Set<string>,
  setNewCartItem: (value: string) => void,
  RemoveFromCart: (value: string) => void,
}