import styled from 'styled-components';

export const Tasktext = styled.p`
  font-size: 1.5rem;
  align-self: flex-start;
  color: ${({ theme, isDone }) => (isDone ? theme.lightmode.colors.checkBorder : theme.lightmode.colors.taskColor)};
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.lightmode.colors.spanColor};
    width: 100%;
    height: 2px;
    left: -110%;
    top: 50%;
    animation: ${({ isDone }) => (isDone ? 'done-animation 1.5s forwards' : null)};
    @keyframes done-animation {
      0% {
        left: -110%;
      }
      100% {
        left: 0%;
      }
    }
  }
`;

export const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    width: 1.5rem;
    height: 1.5rem;
    align-self: center;
    background: none;
    border: 2px solid;
    border-radius: 50%;
    border-color: ${({ theme }) => theme.lightmode.colors.checkBorder};
  }
`;
