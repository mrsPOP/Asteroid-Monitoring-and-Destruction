interface AsteroidsListStoreType {
  renderedAsteroids: [] | undefined | AsteroidInfo[],
  notRenderedAsteroids: [] | undefined | AsteroidInfo[],
  setAsteroidsList: () => void,
  getMoreAsteroids: () => void,
}

interface FilterStoreType {
  inKilometers: boolean,
  setInKilometers: (value: boolean) => void,
}

interface CartStoreType {
  cart: Set<string>,
  setNewCartItem: (value: string) => void,
  removeFromCart: (value: string) => void,
}