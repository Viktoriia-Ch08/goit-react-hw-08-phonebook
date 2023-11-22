import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  ${responsive.desktop.standard`
    padding-left: 30px;
  padding-right: 30px;
  `};
`;
