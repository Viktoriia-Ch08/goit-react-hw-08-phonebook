import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;

  z-index: 100;
  width: 100%;

  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  min-width: 200px;
  max-width: 447px;
  padding: 20px;

  margin: 0 auto;
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
`;

export const HeaderLink = styled(NavLink)`
  background-color: transparent;
  border: none;

  .home-icon {
    width: 25px;
    height: 25px;
    text-align: center;
  }
`;
