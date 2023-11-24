import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import { HomeHeader, HomeText, SpecialText } from './Home.styled';
import { Container } from 'components/ForAllComponents/ForAll.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <Container>
      <HomeHeader> Phonebook</HomeHeader>
      {!isAuthorized ? (
        <>
          <HomeText> Welcome!</HomeText>
          <HomeText>
            <SpecialText>
              <Link to="/login">Log in</Link>
            </SpecialText>{' '}
            or{' '}
            <SpecialText>
              {' '}
              <Link to="/register">Register</Link>
            </SpecialText>{' '}
            please!{' '}
          </HomeText>
        </>
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
