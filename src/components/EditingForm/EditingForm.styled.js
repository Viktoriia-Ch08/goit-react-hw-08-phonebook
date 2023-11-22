import styled from 'styled-components';

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 12255;

  backdrop-filter: blur(8px);
`;

export const Form = styled.form`
  margin-top: 50%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .label-thumb {
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
  }
`;

export const EditInput = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px 18px;
  box-shadow: none;
  border-radius: 20px;
  border: 2px solid rgba(82, 82, 91, 1);
  transition: box-shadow 300ms linear;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const WarningSpan = styled.span`
  font-family: 'Dancing Script', cursive;
  font-size: 18px;
  text-align: center;
`;
