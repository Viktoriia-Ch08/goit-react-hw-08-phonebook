import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from '../operations/auth.operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthorized: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthorized = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthorized = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuthorized = false;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          logOutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, logInThunk.pending, logOutThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
