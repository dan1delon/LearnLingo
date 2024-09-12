import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {},
  reducers: {
    addFavorite(state, action) {
      const ad = action.payload;
      state[ad._id] = ad;
    },
    removeFavorite(state, action) {
      const id = action.payload._id;
      delete state[id];
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
