import { createAsyncThunk } from '@reduxjs/toolkit';

export const signInWithPhoneNo = createAsyncThunk(
  'auth/signInWithPh',
  async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);
