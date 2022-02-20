import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 665px;
  align-self: center;
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 0;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.lightmode.colors.titleColor};
  & > * {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.lightmode.colors.listMenuAndBtn};
  border: none;
  width: 125px;
  padding: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15em;
  border-radius: 20px;
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
  @media (max-width: 500px) {
    width: 100px;
  }
  @media (max-width: 400px) {
    width: 75px;
  }
`;
