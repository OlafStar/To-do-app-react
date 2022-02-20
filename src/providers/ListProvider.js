import React, { useState } from 'react';

export const ListContext = React.createContext({
  addNewTask: () => {},
  inputValue: '',
  setInputValue: () => {},
  currentList: '',
  setCurrentList: () => {},
  isTaskList: Boolean,
  setIsTaskList: () => {},
  getTaskList: () => {},
  tasksList: [],
  setTasksList: () => {},
  actuallTasks: [],
  setActuallTasks: () => {},
  listExist: Boolean,
  setListExist: () => {},
});

const initialInputState = '';

class tasks {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

const ListProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(initialInputState);
  const [currentList, setCurrentList] = useState('');
  const [isTaskList, setIsTaskList] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [actuallTasks, setActuallTasks] = useState([]);
  const [listExist, setListExist] = useState(false);

  const addNewList = () => {
    if (inputValue !== '') {
      const x = new tasks(inputValue);
      setTasksList([...tasksList, x]);
      console.log(tasksList);
      setActuallTasks([]);
      setInputValue(initialInputState);
    }
  };

  const addNewTask = () => {
    if (inputValue !== '') {
      setActuallTasks([...actuallTasks, inputValue]);
      // eslint-disable-next-line array-callback-return
      tasksList.map((item) => {
        if (item.name === currentList) {
          item.tasks.push(inputValue);
        }
      });
      setInputValue(initialInputState);
      console.log(tasksList);
    }
  };
  return (
    <ListContext.Provider
      value={{
        addNewList,
        addNewTask,
        inputValue,
        setInputValue,
        currentList,
        setCurrentList,
        isTaskList,
        setIsTaskList,
        tasksList,
        setTasksList,
        actuallTasks,
        setActuallTasks,
        listExist,
        setListExist,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
