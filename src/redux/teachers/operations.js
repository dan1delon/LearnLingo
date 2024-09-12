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

      if (!data) {
        return [];
      }
      const teachersArray = data
        ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
        : [];

      return teachersArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
