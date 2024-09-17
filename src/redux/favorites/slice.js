import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/slice';
import {
  addFavoriteToDatabase,
  removeFavoriteFromDatabase,
} from '../../firebaseHelpers/firebaseFavorites';

const initialState = {};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state[action.payload.id] = action.payload;
      addFavoriteToDatabase(action.payload.userId, action.payload.id);
    },
    removeFavorite: (state, action) => {
      delete state[action.payload.id];
      removeFavoriteFromDatabase(action.payload.userId, action.payload.id);
    },
    clearFavorites: state => {
      return {};
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, state => {
      return {};
    });
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
