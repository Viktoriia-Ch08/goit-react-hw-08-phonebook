import { ImBin } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations/contacts.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';
import { ButtonWrapper } from './DeleteButton.styled';
import { MainButton } from 'components/ForAllComponents/ForAll.styled';

const DeleteButtonComponent = ({
  setContactIdsToDelete,
  contactsIdsToDelete,
}) => {
  const dispatch = useDispatch();

  const reset = () => setContactIdsToDelete([]);

  return (
    <ButtonWrapper>
      <MainButton
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
        <ImBin className="btn-icon" />
      </MainButton>
    </ButtonWrapper>
  );
};

export default DeleteButtonComponent;
