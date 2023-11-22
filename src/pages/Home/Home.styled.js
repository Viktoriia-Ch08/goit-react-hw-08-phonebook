import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const HomeHeader = styled.h1`
  text-align: center;
  padding-bottom: 10px;

  font-family: 'Dancing Script', cursive;
  ${responsive.tablet.standard`
     font-size: 36px;
  `};

  ${responsive.desktop.standard`
   font-size: 45px;
  `};
`;

export const HomeText = styled.p`
  margin: 0 auto;
  width: 245px;
  text-align: center;
  line-height: 1.25;

  ${responsive.tablet.standard`
     width: 370px;
     font-size: 18px;
  `};
  ${responsive.desktop.standard`
  width: 500px;
   font-size: 24px;
  `};
`;

export const SpecialText = styled.span`
  text-decoration: underline;
`;
