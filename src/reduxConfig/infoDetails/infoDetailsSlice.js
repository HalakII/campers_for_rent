import { createSlice } from '@reduxjs/toolkit';

import { fetchInfoDetails } from './operations';

import {
  handlePending,
  handleFulfilledGet,
  handleRejected,
} from './handleFunctionReduser.js';

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
console.log(infoDetailsSlice);
