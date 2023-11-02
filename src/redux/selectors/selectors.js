import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.phonebook;

export const selectContacts = createSelector(
  selectPhonebook,
  phonebook => phonebook.contacts
);

export const selectIsLoading = createSelector(
  selectPhonebook,
  phonebook => phonebook.isLoading
);

export const selectError = createSelector(
  selectPhonebook,
  phonebook => phonebook.error
);

export const selectFilterValue = createSelector(
  selectPhonebook,
  phonebook => phonebook.filter
);
