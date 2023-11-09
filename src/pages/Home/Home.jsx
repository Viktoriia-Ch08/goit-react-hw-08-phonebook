import { useDispatch, useSelector } from 'react-redux';
import AddContact from '../Contacts/Contacts';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
import { HomeHeader, HomeText, SpecialText } from './Home.styled';
import { Container } from 'components/ForAllComponents/ForAll.styled';

const Home = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <Container>
      <HomeHeader> Phonebook</HomeHeader>
      {!isAuthorized ? (
        <HomeText>
          Welcome! Click on the menu burger in the upper right corner to{' '}
          <SpecialText>log in</SpecialText> or{' '}
          <SpecialText>register</SpecialText>
        </HomeText>
      ) : (
        <HomeText>
          It is an application that allows you to add, edit, search, and delete
          contacts. Enjoy using it!
        </HomeText>
      )}
    </Container>
  );
};

export default Home;
