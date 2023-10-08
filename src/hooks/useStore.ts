import { create } from "zustand";
import { produce, enableMapSet } from "immer";
import { getAsteroidsList } from "@/utils/helperFunctions";
import {
  AsteroidsListStoreType,
  FilterStoreType,
  CartStoreType,
} from "@/utils/storeTypes";

enableMapSet();

export const useAsteroidsListStore = create<AsteroidsListStoreType>((set) => ({
  renderedAsteroids: undefined,
  notRenderedAsteroids: undefined,
  setAsteroidsList: async () => {
    try {
      const data = await getAsteroidsList();
      set(
        produce((state) => {
          state.renderedAsteroids = data.slice(0, 8);
          state.notRenderedAsteroids = data.slice(8).reverse();
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
            state.notRenderedAsteroids.splice(cutFrom, cutNumber)
          );
        }
      })
    );
  },
}));

export const useFilterStore = create<FilterStoreType>((set) => ({
  inKilometers: true,
  setInKilometers: (value: boolean) => set({ inKilometers: value }),
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
