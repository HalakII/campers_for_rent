import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllInfo } from 'api/services';

export const fetchInfoDetails = createAsyncThunk(
  'info/fetchAllInfo',
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllInfo();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
