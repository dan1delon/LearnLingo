import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://learn-lingo-app-64d51-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/teachers.json');
      const data = response.data;
      console.log(data);

      if (!data) {
        return [];
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
