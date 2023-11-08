import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label-thumb {
    padding-left: 20px;
    font-family: 'Caveat', cursive;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px 18px;

  box-shadow: none;
  border-radius: 20px;
  border: 2px solid rgba(82, 82, 91, 1);
  transition: box-shadow 300ms linear;
  &:focus-within {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
