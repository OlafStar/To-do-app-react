import styled from 'styled-components';

export const Line = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.lightmode.colors.spanColor};
  margin: 25px 0 25px 0;
  @media (max-height: 750px) {
    margin: 20px 0 20px 0;
  }
  @media (max-height: 600px) {
    margin: 15px 0 15px 0;
  }
`;
