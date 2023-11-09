import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgImg from '../../assets/mobile-menu-bg.png';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgb(201, 201, 255);

  background-image: url(${bgImg});
  background-size: 340px;
  background-repeat: no-repeat;
  background-position: center 170px;
`;

export const CloseButton = styled.button`
  position: fixed;
  right: 15px;
  top: 20px;

  border: none;
  background-color: transparent;

  .close-icon-btn {
    width: 30px;
    height: 30px;
  }
`;

export const AuthList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
  padding-top: 90px;
`;

export const AuthItem = styled.li`
  display: flex;
  width: 100px;
`;

export const AuthLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  width: 100px;
  height: 35px;
  padding: 5px;
`;
