// src/store/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialFavoritesState = {
  items: [], // Array to store favorite products
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoritesState,
  reducers: {
    addFavorite(state, action) {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.items.push(action.payload); // Add product if not already in favorites
      }
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
