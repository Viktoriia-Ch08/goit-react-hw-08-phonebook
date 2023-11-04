import { List } from './ContactsList.styled';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterValue,
  selectIsLoading,
} from 'redux/selectors/selectors';
import { fetchContacts } from 'redux/operations/contacts.operations';
import { failedNotification } from 'services/notifications';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import DeleteButtonComponent from 'components/DeleteButton/DeleteButton';
import { useState } from 'react';

export default function ContactsList() {
  const [contactsIdsToDelete, setContactIdsToDelete] = useState([]);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const loading = useSelector(selectIsLoading);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black',
  };

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(error =>
        failedNotification(`😭 Sorry, smth went wrong: ${error.message}`)
      );
  }, [dispatch]);

  return (
    <>
      <ClipLoader
        color={'black'}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <List>
        {contacts !== null &&
          contacts
            .filter(
              contact =>
                filter === '' ||
                contact.name.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .map(({ name, id, number }) => {
              return (
                <ContactItem
                  key={id}
                  name={name}
                  id={id}
                  number={number}
                  setContactIdsToDelete={setContactIdsToDelete}
                  contactsIdsToDelete={contactsIdsToDelete}
                />
              );
            })}
      </List>

      {contacts.length !== 0 ? (
        <DeleteButtonComponent
          setContactIdsToDelete={setContactIdsToDelete}
          contactsIdsToDelete={contactsIdsToDelete}
        />
      ) : (
        <h2>There are no contacts</h2>
      )}
    </>
  );
}
