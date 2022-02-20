/* eslint-disable array-callback-return */
import { Title } from 'components/Container/Container.style';
import { Line } from 'components/Line/Line';
import { Wrapper } from 'components/NewList/NewList.style';
import Task from 'components/Task/Task';
import { ListContext } from 'providers/ListProvider';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const Inputtask = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-left: 20px;
  background: none;
`;

const ToDoList = () => {
  const { currentList, setInputValue, inputValue, tasksList } = useContext(ListContext);
  const [renderTask, setRenderTask] = useState([]);

  useEffect(() => {
    tasksList.map((item) => {
      if (item.name === currentList) {
        setRenderTask(item.tasks);
      }
    });
  }, [currentList, tasksList]);

  return (
    <Wrapper>
      <Title>{currentList}</Title>
      {renderTask.map((item) => (
        <Task item={item} key={currentList + item} />
      ))}
      <Line />
      <Inputtask onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Add new task" />
      <Line />
    </Wrapper>
  );
};

export default ToDoList;
