import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddContact from './AddContact';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/contacts.operations';
import { refreshUserThunk } from 'redux/operations/auth.operations';
import { failedNotification } from 'services/notifications';

const Home = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
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
