import { create } from "zustand";
import { produce, enableMapSet } from "immer";

enableMapSet();

export const useAsteroidsListStore = create<AsteroidsListStoreType>((set) => ({
  renderedAsteroids: undefined,
  notRenderedAsteroids: undefined,
  setAsteroidsList: (data) => {
    try {
      set(
        produce((state) => {
          state.renderedAsteroids = data.slice(-1);
          state.notRenderedAsteroids = data.slice(0, -1);
        })
      );
    } catch (e) {
      console.error(e);
    }
  },
  getMoreAsteroids: () => {
    set(
      produce((state) => {
        if (state.notRenderedAsteroids.length > 0) {
          const cutFrom = state.notRenderedAsteroids.length < 8 ? 0 : -8;
          const cutNumber =
            state.notRenderedAsteroids.length < 8
              ? state.notRenderedAsteroids.length
              : 8;
          state.renderedAsteroids = state.renderedAsteroids.concat(
            state.notRenderedAsteroids.splice(cutFrom, cutNumber).reverse()
          );
        }
      })
    );
  },
  removeAsteroids: (ids) => {
    // ДОРАБОТАТЬ
    set((state) => ({
      ...state,
      renderedAsteroids: state.renderedAsteroids?.filter(
        (asteroid: AsteroidInfo) => !ids.includes(asteroid.id)
      ),
    }));
  },
}));

export const useDistanceUnitStore = create<DistanceUnitStoreType>((set) => ({
  inKilometers: true,
  switchInKilometers: () =>
    set(
      produce((state) => {
        state.inKilometers = !state.inKilometers;
      })
    ),
}));

export const useCartStore = create<CartStoreType>((set) => ({
  cart: new Map(),
  setNewCartItem: (id, asteroidObj) =>
    set(
      produce((state) => {
        state.cart.set(id, asteroidObj);
      })
    ),
  removeFromCart: (id) =>
    set(
      produce((state) => {
        state.cart.delete(id);
      })
    ),
  clearCart: () =>
    set(
      produce((state) => {
        state.cart.clear();
      })
    ),
}));
