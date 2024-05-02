import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoDetails: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      const newFavorite = payload;
      state.infoDetails.push(newFavorite);
    },
    removeFromFavorites: (state, { payload }) => {
      const advertToRemove = payload;
      state.infoDetails = state.infoDetails.filter(
        item => item.id !== advertToRemove.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
