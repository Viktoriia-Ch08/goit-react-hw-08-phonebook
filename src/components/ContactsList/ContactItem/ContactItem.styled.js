import styled from 'styled-components';

export const ContactLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.p`
  font-family: 'Dancing Script', cursive, sans-serif;

  font-size: 24px;
  font-weight: 500;
`;

export const NumberText = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const EditingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px groove black;
  border-radius: 10px;
  background-color: transparent;

  .edit-btn-icon {
    width: 20px;
    height: 20px;
  }
`;
