import styled from 'styled-components';
import bgImg from '../../assets/bg.png';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  border: 1px groove black;
  border-radius: 10px;
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

  .btn-icon {
    width: 20px;
    height: 20px;
  }

  .delete-btn {
    width: 40px;
    height: 40px;
  }
`;

export const MainButton = styled.button`
  width: 45px;
  height: 45px;
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

  .btn-icon {
    width: 20px;
    height: 20px;
  }
`;

export const Container = styled.div`
  min-height: 90dvh;
  margin-top: 70px;
  padding-top: 20px;
  background-image: linear-gradient(
      rgba(201, 201, 255, 0.6),
      rgba(201, 201, 255, 0.6)
    ),
    url(${bgImg});
  background-size: 180px;
  background-position: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
