import { ListContext } from 'providers/ListProvider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './MenuPanel.style';

const MenuPanel = () => {
  const { tasksList, setCurrentList, setIsTaskList, setActuallTasks } = useContext(ListContext);
  return (
    <Wrapper>
      <ul>
        {tasksList.map((item) => (
          <li
            onClick={(e) => {
              setIsTaskList(true);
              setActuallTasks([]);
              setCurrentList(e.target.innerHTML);
            }}
            key={item.name}
          >
            <Link to={`/ToDoList/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MenuPanel;
