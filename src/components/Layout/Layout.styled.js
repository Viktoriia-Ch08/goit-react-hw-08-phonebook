import { NavLink } from 'react-router-dom';
import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;

  z-index: 100;
  width: 100%;

  border-bottom: 1px solid black;
  background-color: rgb(255, 189, 189);
`;

export const Nav = styled.nav`
  min-width: 200px;
  max-width: 700px;
  padding: 20px;

  margin: 0 auto;

  ${responsive.tablet.standard`
    max-width: 1100px;
  `};

  ${responsive.desktop.standard`
    max-width: 1440px;
    padding-left: 30px;
    padding-right: 30px;
  `};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BurgerButton = styled.button`
  border: none;
  background-color: transparent;

  .burger-btn-icon {
    width: 25px;
    height: 25px;
  }

  ${responsive.tablet.standard`
     display: none;
  `};
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  .home-icon {
    width: 22px;
    height: 22px;
    text-align: center;

    ${responsive.tablet.standard`
     width: 28px;
    height: 28px;
  `};

    ${responsive.desktop.standard`
    width: 40px;
    height: 40px;
  `};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${responsive.tablet.standard`
    gap: 20px;
  `};
`;

export const NavContainerTablet = styled.div`
  display: none;

  ${responsive.tablet.standard`
    display: flex;
    align-items: center;
    gap: 15px;
  `};
`;

export const AuthLink = styled(NavLink)`
  padding: 10px;
  font-family: 'Caveat', cursive;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;

  &.active {
    background-color: rgba(201, 201, 255, 0.7);
  }

  ${responsive.desktop.standard`
    padding: 12px;
    font-size: 24px;
  `};
`;
