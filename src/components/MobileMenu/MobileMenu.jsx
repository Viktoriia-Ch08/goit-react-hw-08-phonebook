import { useDispatch, useSelector } from 'react-redux';
import { AuthLink, AuthList, Backdrop, CloseButton } from './MobileMenu.styled';
import { selectIsAuthorized, selectUser } from 'redux/selectors/authSelectors';
import { logOutThunk } from 'redux/operations/auth.operations';
import { IoIosClose } from 'react-icons/io';

const MobileMenu = ({ closeMobileMenu }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <Backdrop>
      <CloseButton type="button" onClick={() => closeMobileMenu(false)}>
        <IoIosClose className="close-icon-btn" />
      </CloseButton>
      {!isAuthorized && (
        <AuthList>
          <AuthLink to="/register" onClick={() => closeMobileMenu(false)}>
            Register
          </AuthLink>
          <AuthLink to="/login" onClick={() => closeMobileMenu(false)}>
            Log In
          </AuthLink>
        </AuthList>
      )}
    </Backdrop>
  );
};

export default MobileMenu;
