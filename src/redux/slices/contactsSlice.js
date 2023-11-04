import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContacts,
  fetchContacts,
  updateContact,
} from 'redux/operations/contacts.operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => !action.payload.includes(contact.id)
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.map(contact => {
          if (contact.id === action.payload.id) return action.payload;
          return contact;
        });
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContacts.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContacts.rejected,
          updateContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setFilterValue } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
