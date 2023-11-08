import { useSelector } from 'react-redux';
import AddContact from '../Contacts/Contacts';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectContacts } from 'redux/selectors/selectors';
import { HomeHeader, HomeText } from './Home.styled';
import ContactForm from 'components/ContactForm/ContactForm';

const Home = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <div className="container">
      <HomeHeader>Phonebook</HomeHeader>
      {!isAuthorized ? (
        <>
          <HomeText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui
            incidunt! Soluta iure deserunt amet porro dignissimos impedit odit
            sed laboriosam, obcaecati dolores ex vero quaerat. Voluptatum non
            reprehenderit animi porro.
          </HomeText>
        </>
      ) : (
        <>
          <ContactForm />
        </>
      )}
    </div>
  );
};

export default Home;
