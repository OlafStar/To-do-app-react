import styled from 'styled-components';

export const AddTaskButton = styled.button`
  background-color: ${({ theme }) => theme.lightmode.colors.listMenuAndBtn};
  border: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
  margin: 0 10px 0 10px;
  font-size: 2rem;
  @media (max-height: 750px) {
    width: 50px;
    height: 50px;
  }
  @media (max-height: 600px) {
    font-size: 9px;
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
