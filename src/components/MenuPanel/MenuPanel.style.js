import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  max-height: 100px;
  min-height: 50px;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  ul {
    list-style: none;
    display: flex;
    & > * {
      margin: 10px;
    }
    li {
      * {
        cursor: pointer;
        color: ${({ theme }) => theme.lightmode.colors.listTextColor};
        text-decoration: none;
      }
    }
  }
`;
