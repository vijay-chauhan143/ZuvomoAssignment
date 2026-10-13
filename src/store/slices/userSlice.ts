import { createSlice } from '@reduxjs/toolkit';

import { fetchUserData } from '../../services/actions/userActions';

type UserState = {
  userData: unknown | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  userData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? 'The request could not be completed.';
      });
  },
});

export default userSlice.reducer;