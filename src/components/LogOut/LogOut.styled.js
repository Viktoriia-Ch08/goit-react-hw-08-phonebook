import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogOutText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 20px;

  ${responsive.tablet.standard`
       font-size: 24px;
  `};

  ${responsive.desktop.standard`
   font-size: 32px;
  `};
`;
