import { createSlice } from '@reduxjs/toolkit';
import { signInWithPhoneNo } from './authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: [],
    loading: false,
    error: ''
  },
  extraReducers: {
    [signInWithPhoneNo.pending]: (state, action) => {
      state.loading = true;
    },
    [signInWithPhoneNo.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth = action.payload;
    },
    [signInWithPhoneNo.rejected]: (state, action) => {
      state.loading = false;
      state.error = '';
    }
  }
});

export default authSlice.reducer;
