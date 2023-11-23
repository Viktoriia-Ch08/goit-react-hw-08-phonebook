import { useNavigate } from 'react-router-dom';
import { NoContactsContainer, NoContactsText } from './NoContacts.styled';
import AddContactButton from 'components/AddContactButton/AddContactButton';

const NoContacts = () => {
  const navigate = useNavigate();

  return (
    <NoContactsContainer>
      <NoContactsText>You haven`t contacts yet</NoContactsText>

      <AddContactButton onClick={() => navigate('/addContact')} />
    </NoContactsContainer>
  );
};

export default NoContacts;
