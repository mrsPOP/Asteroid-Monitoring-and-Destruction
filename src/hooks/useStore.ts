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
}));

export const useDistanceUnitStore = create<DistanceUnitStoreType>((set) => ({
  inKilometers: true,
  switchInKilometers: () => set(
    produce((state) => {
      state.inKilometers = !state.inKilometers;
    })
  ),
}));

export const useCartStore = create<CartStoreType>((set) => ({
  cart: new Set(),
  setNewCartItem: (value: string) =>
    set(
      produce((state) => {
        state.cart.add(value);
      })
    ),
  removeFromCart: (value: string) =>
    set(
      produce((state) => {
        state.cart.delete(value);
      })
    ),
}));
