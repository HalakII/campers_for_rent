import { configureStore } from '@reduxjs/toolkit';
import { infoDetailsReducer } from './infoDetails/infoDetailsSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filtersReducer } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['infoDetails'],
};

export const store = configureStore({
  reducer: {
    infoDetails: infoDetailsReducer,
    filters: filtersReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
