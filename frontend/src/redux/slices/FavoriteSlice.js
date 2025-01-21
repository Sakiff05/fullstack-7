import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "counter",
  initialState: {
    favorite: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item._id != action.payload._id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
