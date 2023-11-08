import styled from 'styled-components';

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px groove black;
  border-radius: 10px;
  background-color: transparent;

  .logout-btn-icon {
    width: 20px;
    height: 20px;
    padding: 6px;
    text-align: center;
  }
`;

export const LogOutText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
`;
