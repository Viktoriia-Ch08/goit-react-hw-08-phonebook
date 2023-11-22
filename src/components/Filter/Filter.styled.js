import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 25px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterHeader = styled.h3`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;

  ${responsive.tablet.standard`
     font-size: 30px;
  `};

  ${responsive.desktop.standard`
    font-size: 35px;
  `};
`;
