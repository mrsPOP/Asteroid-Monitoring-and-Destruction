interface AsteroidsListStoreType {
  renderedAsteroids: [] | undefined | AsteroidInfo[],
  notRenderedAsteroids: [] | undefined | AsteroidInfo[],
  setAsteroidsList: (data: AsteroidInfo[]) => void,
  getMoreAsteroids: () => void,
}

interface DistanceUnitStoreType {
  inKilometers: boolean,
  switchInKilometers: () => void,
}

interface CartStoreType {
  cart: Set<string>,
  setNewCartItem: (value: string) => void,
  removeFromCart: (value: string) => void,
}