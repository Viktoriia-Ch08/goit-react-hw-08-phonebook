import { responsive } from 'scss/_mixins';
import styled from 'styled-components';

export const ContactLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  ${responsive.desktop.standard`
  gap: 20px;
  `};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

export const ContactImage = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: gray;
  ${responsive.desktop.standard`
     width: 60px;
  height: 60px;
  `};
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  ${responsive.desktop.standard`
     width: 20px;
  height: 20px;
  `};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.p`
  font-family: 'Dancing Script', cursive, sans-serif;

  font-size: 24px;
  font-weight: 500;

  ${responsive.tablet.standard`
     font-size: 30px;
  `};
  ${responsive.desktop.standard`
     font-size: 40px;
  `};
`;

export const NumberText = styled.p`
  font-size: 12px;
  font-weight: 400;

  ${responsive.tablet.standard`
     font-size: 16px;
  `};
  ${responsive.desktop.standard`
     font-size: 24px;
  `};
`;
