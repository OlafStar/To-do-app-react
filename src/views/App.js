import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import ListContext from 'providers/ListProvider';
import Buttons from 'components/Buttons/Buttons';
import MenuPanel from 'components/MenuPanel/MenuPanel';
import NewList from 'components/NewList/NewList';
import { Container } from 'components/Container/Container.style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from 'components/ToDoList/ToDoList';
import TitlePanel from 'components/TitlePanel/TitlePanel';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.lightmode.colors.listMenuAndBtn};
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ListContext>
        <Wrapper>
          <Container>
            <TitlePanel />
            <MenuPanel />
            <Routes>
              <Route path="/" exact element={<NewList />} />
              <Route path="/ToDoList/:list" element={<ToDoList />} />
            </Routes>
            <Buttons />
          </Container>
        </Wrapper>
      </ListContext>
    </ThemeProvider>
  </Router>
);

export default App;
