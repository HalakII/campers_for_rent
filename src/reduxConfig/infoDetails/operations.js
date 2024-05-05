import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e8ca914bb72f0a9c50682e.mockapi.io/api';

export const fetchInfoDetails = createAsyncThunk(
  'info/fetchAllInfo',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('advert', {
        params: {
          page,
          limit: 4,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
