import { createSlice } from '@reduxjs/toolkit';

import { fetchInfoDetails } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.infoDetails.push(...payload);
  if (payload.length < state.limit) state.isLoadMore = false;
};

const handleRejected = (state, { payload }) => {
  console.error('Error:', payload);
  state.isLoading = false;
  state.error = payload;
};

const infoDetailsSlice = createSlice({
  name: 'infoDetails',
  initialState: {
    page: 1,
    limit: 4,
    infoDetails: [],
    isLoadMore: true,
    isLoading: false,
    error: null,
  },

  reducers: {
    incrementPage: state => {
      state.page = state.page + 1;
    },

    resetList: state => {
      state.cars = [];
      state.page = 1;
      state.isLoadMore = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInfoDetails.pending, handlePending)
      .addCase(fetchInfoDetails.fulfilled, handleFulfilledGet)
      .addCase(fetchInfoDetails.rejected, handleRejected);
  },
});

export const { incrementPage, resetList } = infoDetailsSlice.actions;

export const infoDetailsReducer = infoDetailsSlice.reducer;
