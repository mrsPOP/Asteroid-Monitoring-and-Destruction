import { create } from "zustand";
import { produce } from "immer";
import { getAsteroidsList } from "@/utils/helperFunctions";
import {
  AsteroidsListStoreType,
  FilterStoreType,
  CartStoreType,
} from "@/utils/storeTypes";

export const useAsteroidsListStore = create<AsteroidsListStoreType>((set) => ({
  asteroidsList: undefined,
  setAsteroidsList: async () => {
    try {
      const data = await getAsteroidsList();
      set(
        produce((state) => {
          state.asteroidsList = data;
        })
      );
    } catch (e) {
      console.error(e);
    }
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
  RemoveFromCart: (value: string) =>
    set(
      produce((state) => {
        state.cart.delete(value);
      })
    ),
}));
