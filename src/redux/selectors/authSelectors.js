import { createSelector } from '@reduxjs/toolkit';

const selectAuthorization = state => state.auth;

export const selectIsAuthorized = createSelector(
  selectAuthorization,
  auth => auth.isAuthorized
);

export const selectUser = createSelector(
  selectAuthorization,
  auth => auth.user
);
