import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: null,
  transmission: null,
  details: [],
  form: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
    setTransmission: (state, { payload }) => {
      state.transmission = payload;
    },
    setForm: (state, { payload }) => {
      state.form = payload;
    },
    setDetails: (state, { payload }) => {
      state.details = payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setLocation,
  setTransmission,
  setForm,
  setDetails,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
