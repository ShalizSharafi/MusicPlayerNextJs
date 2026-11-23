import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (
        item, ///add action function
      ) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      removeFavorite: (
        id,
        type, //remove favorites action function
      ) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (item) => item.id !== id || item.type !== type,
          ),
        })),

      isFavorite: (
        id,
        type, //check wheather its liked or not
      ) => get().favorites.some((item) => item.id === id && item.type === type), //get() reads the current store

      toggleFavorites: (item) => //combining like and unlike function
        set((state) => {
          const exists = state.favorites.some(
            (f) => f.id === item.id && f.type === item.type,
          )

          return {
            favorites: exists
              ? state.favorites.filter(
                  (f) => f.id !== item.id || f.type !== item.type,
                )
              : [...state.favorites, item],
          }
        }),
    }),

    { name: "favorites-storage" }, //configuartion name
  ),
);
export default useFavoriteStore;
