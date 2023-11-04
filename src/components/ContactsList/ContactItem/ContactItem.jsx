import { useState } from 'react';
import { Item } from '../ContactsList.styled';
import EditingForm from 'components/EditingForm/EditingForm';

const ContactItem = ({
  name,
  number,
  id,
  setContactIdsToDelete,
  contactsIdsToDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxStatus = selectedContactId => {
    setContactIdsToDelete(
      contactsIdsToDelete.includes(selectedContactId)
        ? contactsIdsToDelete.filter(id => id !== selectedContactId)
        : [...contactsIdsToDelete, selectedContactId]
    );
  };

  return (
    <>
      {!isEditing ? (
        <Item>
          <label>
            <input
              type="checkbox"
              name="contactToDelete"
              checked={contactsIdsToDelete.includes(id)}
              onChange={() => handleCheckboxStatus(id)}
            />
            <p>{`${name}: ${number}`}</p>
            <button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </label>
        </Item>
      ) : (
        <EditingForm
          name={name}
          id={id}
          number={number}
          closeEditingForm={setIsEditing}
        />
      )}
    </>
  );
};
export default ContactItem;
