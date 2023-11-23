import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/selectors/authSelectors';
import {
  AuthLink,
  BurgerButton,
  Header,
  HeaderLink,
  Item,
  LinkContainer,
  List,
  Nav,
  NavContainerTablet,
} from './Layout.styled';
import { FiAlignJustify } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';

import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useState } from 'react';
import LogOut from 'components/LogOut/LogOut';
import { BounceLoader } from 'react-spinners';

const Layout = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <Header>
        <Nav>
          <List>
            <Item>
              <LinkContainer>
                <HeaderLink to="/">
                  <IoHomeOutline className="home-icon" />
                </HeaderLink>
                {isAuthorized && (
                  <>
                    <HeaderLink to="/addContact">
                      <AiOutlineUserAdd className="home-icon" />
                    </HeaderLink>
                    <HeaderLink to="/contacts">
                      <RiContactsLine className="home-icon" />
                    </HeaderLink>
                  </>
                )}
              </LinkContainer>
            </Item>

            <Item>
              {!isAuthorized ? (
                <>
                  <BurgerButton type="button" onClick={handleMobileMenu}>
                    <FiAlignJustify className="burger-btn-icon" />
                  </BurgerButton>
                  <NavContainerTablet>
                    <AuthLink to="/login">Login</AuthLink>
                    <AuthLink to="/register">Register</AuthLink>
                  </NavContainerTablet>
                </>
              ) : (
                <LogOut />
              )}
            </Item>
          </List>
          {isMobileMenuOpen && (
            <MobileMenu closeMobileMenu={setIsMobileMenuOpen} />
          )}
        </Nav>
      </Header>
      <>
        <Suspense
          fallback={
            <div>
              <BounceLoader
                className="loader"
                loading={true}
                color={'#751975'}
                size={80}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default Layout;
