import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import favoritesReducer from "./favoritesSlice"; // Import the favorites reducer

const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // Add favorites reducer
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,

  },
});

export default store;
