import { useSelector } from 'react-redux';
import {
  AuthLink,
  AuthListContainer,
  Backdrop,
  CloseButton,
} from './MobileMenu.styled';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import { IoIosClose } from 'react-icons/io';

const MobileMenu = ({ closeMobileMenu }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <Backdrop>
      <CloseButton
        type="button"
        onClick={() => {
          closeMobileMenu(false);
          document.body.style.overflow = 'scroll';
        }}
      >
        <IoIosClose className="close-icon-btn" />
      </CloseButton>
      {!isAuthorized && (
        <AuthListContainer>
          <AuthLink to="/register" onClick={() => closeMobileMenu(false)}>
            Register
          </AuthLink>
          <AuthLink to="/login" onClick={() => closeMobileMenu(false)}>
            Log In
          </AuthLink>
        </AuthListContainer>
      )}
    </Backdrop>
  );
};

export default MobileMenu;
