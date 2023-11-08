import styled from 'styled-components';

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogOutBtn = styled.button`
  border: none;
  background-color: transparent;

  .logout-btn-icon {
    width: 25px;
    height: 25px;
    text-align: center;
  }
`;

export const LogOutText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
`;
