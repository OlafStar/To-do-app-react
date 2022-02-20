import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.lightmode.colors.titleColor};
  text-shadow: 5px 4px #00000040;
`;
