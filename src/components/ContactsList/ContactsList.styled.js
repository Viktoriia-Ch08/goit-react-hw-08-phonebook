import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  ${responsive.tablet.standard`
    padding-left: 40px;
  padding-right: 40px;
  `};
`;
