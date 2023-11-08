import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logOutThunk } from 'redux/operations/auth.operations';
import { selectIsAuthorized, selectUser } from 'redux/selectors/authSelectors';
import {
  AuthItem,
  AuthLinkContainer,
  BurgerButton,
  Header,
  HeaderLink,
  Item,
  List,
  Nav,
} from './Layout.styled';
import { FiAlignJustify } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';

import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useState } from 'react';
import LogOut from 'components/LogOut/LogOut';

const Layout = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <Header>
        <Nav>
          <List>
            <Item>
              <HeaderLink to="/">
                <IoHomeOutline className="home-icon" />
              </HeaderLink>
            </Item>
            <Item>
              {!isAuthorized ? (
                <BurgerButton type="button" onClick={handleMobileMenu}>
                  <FiAlignJustify style={{ width: '35px', height: '35px' }} />
                </BurgerButton>
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
      <Suspense
        fallback={
          <div>
            {/* <BounceLoader
              className="loader"
              loading={true}
              color={'#751975'}
              size={80}
            /> */}
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
