import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/ForAllComponents/ForAll.styled';
import NoContacts from 'components/NoContacts/NoContacts';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      {Array.isArray(contacts) ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <NoContacts />
      )}
    </Container>
  );
};

export default Contacts;
