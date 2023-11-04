import { useSelector } from 'react-redux';
import AddContact from './AddContact';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectContacts } from 'redux/selectors/selectors';

const Home = () => {
  const contacts = useSelector(selectContacts);
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <div>
      <h1>Phonebook</h1>
      {!isAuthorized ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui
            incidunt! Soluta iure deserunt amet porro dignissimos impedit odit
            sed laboriosam, obcaecati dolores ex vero quaerat. Voluptatum non
            reprehenderit animi porro.
          </p>
        </>
      ) : (
        <>
          <AddContact />
          {Array.isArray(contacts) && (
            <>
              <Filter />
              <ContactsList />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
