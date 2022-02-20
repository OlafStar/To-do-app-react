import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.lightmode.colors.toDoColor};
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.25);
  max-width: 665px;
  align-self: center;
  width: 90%;
  min-height: 300px;
  flex: 8;
  display: flex;
  align-items: center;
  padding: 50px 25px;
  flex-direction: column;
  @media (max-height: 750px) {
    padding: 25px 25px;
  }
`;

export const ListName = styled.input`
  border: 2px solid;
  border-color: ${({ theme }) => theme.lightmode.colors.checkBorder};
  outline: none;
  width: 80%;
  padding: 10px 15px;
  border-radius: 25px;
  text-align: center;
`;
