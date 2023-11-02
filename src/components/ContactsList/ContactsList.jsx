import { ButtonWrapper, DeleteButton, Item, List } from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useState, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterValue,
  selectIsLoading,
} from 'redux/selectors/selectors';
import {
  deleteContacts,
  fetchContacts,
} from 'redux/operations/contacts.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';

export default function ContactsList() {
  const [contactsIdsToDelete, setContactIdsToDelete] = useState([]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  console.log(contacts);

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

  const handleDeleteContacts = contactsToDelete => {
    dispatch(deleteContacts(contactsToDelete))
      .unwrap()
      .then(() =>
        successfullNotification(
          `You have deleted ${contactsToDelete.length} contact(s)!`
        )
      )
      .catch(error =>
        failedNotification(
          `Smth went wrong, you didn't delete the contact(s): ${error.message} 😭`
        )
      );
  };

  const handleCheckboxStatus = selectedContactId => {
    setContactIdsToDelete(
      contactsIdsToDelete.includes(selectedContactId)
        ? contactsIdsToDelete.filter(id => id !== selectedContactId)
        : [...contactsIdsToDelete, selectedContactId]
    );
  };

  const reset = () => setContactIdsToDelete([]);

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
            .map(contact => (
              <label key={contact.id}>
                <Item>
                  <input
                    type="checkbox"
                    name="contactToDelete"
                    checked={contactsIdsToDelete.includes(contact.id)}
                    onChange={() => handleCheckboxStatus(contact.id)}
                  />
                  <p>{`${contact.name}: ${contact.number}`}</p>
                </Item>
              </label>
            ))}
      </List>
      {contacts.length !== 0 ? (
        <ButtonWrapper>
          <DeleteButton
            type="button"
            onClick={() => {
              if (contactsIdsToDelete.length === 0) {
                failedNotification('Choose contact(s) to delete');
              } else {
                handleDeleteContacts(contactsIdsToDelete);
                reset();
              }
            }}
          >
            <FaTrashAlt className="icon" />
          </DeleteButton>
        </ButtonWrapper>
      ) : (
        <h2>There are no contacts</h2>
      )}
    </>
  );
}
