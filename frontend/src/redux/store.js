import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/FavoriteSlice.js";
export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
