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

interface CartStoreType {
  cart: Map<string, AsteroidInfo>,
  setNewCartItem: (id: string, asteroidObj: AsteroidInfo) => void,
  removeFromCart: (value: string) => void,
  clearCart: () => void
}