import { AddTaskButton } from 'components/AddTaskButton/AddTaskButton.style';
import { ListContext } from 'providers/ListProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Wrapper } from './Buttons.style';

const Buttons = () => {
  const { addNewList, addNewTask, isTaskList, setIsTaskList, tasksList, listExist } = useContext(ListContext);

  return (
    <Wrapper>
      <Link to="/">
        <Button onClick={() => setIsTaskList(false)}>New list</Button>
      </Link>
      <AddTaskButton
        onClick={() => {
          if (isTaskList) addNewTask();
          // eslint-disable-next-line no-unused-expressions
          else if (!isTaskList && listExist) () => {};
          else if (!isTaskList && !listExist) addNewList();
        }}
      >
        +
      </AddTaskButton>
      <Button onClick={() => console.log(tasksList)}>Dark</Button>
    </Wrapper>
  );
};

export default Buttons;
