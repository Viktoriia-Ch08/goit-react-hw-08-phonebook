import {
  ButtonWrapper,
  DeleteButton,
} from 'components/ContactsList/ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations/contacts.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';

const DeleteButtonComponent = ({
  setContactIdsToDelete,
  contactsIdsToDelete,
}) => {
  const dispatch = useDispatch();

  const reset = () => setContactIdsToDelete([]);

  return (
    <ButtonWrapper>
      <DeleteButton
        type="button"
        onClick={() => {
          if (contactsIdsToDelete.length === 0) {
            failedNotification('Choose contact(s) to delete');
          } else {
            dispatch(deleteContacts(contactsIdsToDelete))
              .unwrap()
              .then(() =>
                successfullNotification(
                  `You have deleted ${contactsIdsToDelete.length} contact(s)!`
                )
              )
              .catch(error =>
                failedNotification(
                  `Smth went wrong, you didn't delete the contact(s): ${error.message} 😭`
                )
              );
            reset();
          }
        }}
      >
        <FaTrashAlt className="icon" />
      </DeleteButton>
    </ButtonWrapper>
  );
};

export default DeleteButtonComponent;
