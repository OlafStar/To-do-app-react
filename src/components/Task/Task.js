import { Line } from 'components/Line/Line';
import { ListContext } from 'providers/ListProvider';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Tasktext, Wrapper } from './Task.style';

const Container = styled.div`
  width: 100%;
`;

const Task = ({ item }) => {
  const [isDone, setIsDone] = useState(false);
  const { tasksList, currentList } = useContext(ListContext);
  const refer = React.createRef();

  const toggle = () => {
    setIsDone(true);
    const refText = refer.current.innerHTML;
    // eslint-disable-next-line array-callback-return
    tasksList.map((item) => {
      let filteredTasks = [];
      console.log(item.tasks);
      if (item.name === currentList) {
        filteredTasks = item.tasks.filter((task) => task !== refText);
        item.tasks = filteredTasks;
      }
    });
  };
  return (
    <Container>
      <Line></Line>
      <Wrapper>
        <Tasktext id="tasktext" isDone={isDone} ref={refer}>
          {item}
        </Tasktext>
        <button id="Taskbtn" onClick={toggle}></button>
      </Wrapper>
    </Container>
  );
};

export default Task;
