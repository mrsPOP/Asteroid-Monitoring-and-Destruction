interface AsteroidsListStoreType {
  renderedAsteroids: [] | undefined | AsteroidInfo[],
  notRenderedAsteroids: [] | undefined | AsteroidInfo[],
  setAsteroidsList: (data: AsteroidInfo[]) => void,
  getMoreAsteroids: () => void,
  removeAsteroids: (ids: string[]) => void,
}

interface DistanceUnitStoreType {
  inKilometers: boolean,
  switchInKilometers: () => void,
}

interface CartKeysValuesType {
  [key: string]: AsteroidInfo
}

interface CartStoreType {
  cart: Map<CartKeysValuesType>,
  setNewCartItem: (id: string, asteroidObj: AsteroidInfo) => void,
  removeFromCart: (value: string) => void,
  clearCart: () => void
}