import { useState } from 'react';
import EditingForm from 'components/EditingForm/EditingForm';
import { BiEditAlt } from 'react-icons/bi';
import {
  CheckBox,
  ContactImage,
  ContactInfo,
  ContactLabel,
  EditingBtn,
  Item,
  NameText,
  NumberText,
} from './ContactItem.styled';
import defaultImg from '../../../assets//default_contact_img.png';
import { Button } from 'components/ForAllComponents/ForAll.styled';

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
          <ContactLabel>
            <CheckBox
              type="checkbox"
              name="contactToDelete"
              checked={contactsIdsToDelete.includes(id)}
              onChange={() => handleCheckboxStatus(id)}
            />
            <ContactImage src={defaultImg} alt="Contact image" />
            <ContactInfo>
              <NameText>{name}</NameText>
              <NumberText>{number}</NumberText>
            </ContactInfo>
          </ContactLabel>
          <Button type="button" onClick={() => setIsEditing(true)}>
            <BiEditAlt className="btn-icon" />
          </Button>
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
