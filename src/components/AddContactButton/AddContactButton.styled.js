import styled from 'styled-components';

export const AddButton = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;

  font-weight: 700;
  text-transform: uppercase;

  border: 1px groove black;
  border-radius: 10px;
  box-shadow: none;
  background-color: transparent;
  transition: box-shadow 300ms linear, background-color 300ms linear,
    border 300ms linear;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: rgba(104, 105, 117, 0.9);
    border: 2px solid black;
  }

  .add-btn-icon {
    width: 25px;
    height: 25px;
  }
`;
