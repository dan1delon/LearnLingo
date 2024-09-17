import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { teachersReducer } from './teachers/slice';
import { favoritesReducer } from './favorites/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { filtersReducer } from './filter/slice';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'favorites',
  storage,
  blacklist: ['teachers', 'filters'],
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    favorites: persistedFavoritesReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
