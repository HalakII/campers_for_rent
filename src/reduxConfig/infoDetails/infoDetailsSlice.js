import { createSlice } from '@reduxjs/toolkit';

import { fetchInfoDetails } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.infoDetails = payload;
};

const handleRejected = (state, { payload }) => {
  console.error('Error:', payload);
  state.isLoading = false;
  state.error = payload;
};

const infoDetailsSlice = createSlice({
  name: 'infoDetails',
  initialState: {
    infoDetails: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInfoDetails.pending, handlePending)
      .addCase(fetchInfoDetails.fulfilled, handleFulfilledGet)
      .addCase(fetchInfoDetails.rejected, handleRejected);
  },
});

export const infoDetailsReducer = infoDetailsSlice.reducer;
