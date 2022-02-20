import { Title } from 'components/Container/Container.style';
import { Line } from 'components/Line/Line';
import { Warning } from 'components/Warning/Warning';
import { ListContext } from 'providers/ListProvider';
import React, { useContext } from 'react';
import { ListName, Wrapper } from './NewList.style';

const NewList = () => {
  const { inputValue, setInputValue, tasksList, listExist, setListExist } = useContext(ListContext);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
    for (let i = 0; i < tasksList.length; i++) {
      console.log(tasksList[i]);
      if (tasksList[i].name === e.target.value) {
        setListExist(true);
        break;
      } else setListExist(false);
    }
    console.log(listExist);
  };
  return (
    <Wrapper>
      <Title>NEW LIST</Title>
      <Line />
      <ListName placeholder="List name" onChange={getInputValue} value={inputValue} />
      {listExist ? <Warning>This list already exist</Warning> : null}
    </Wrapper>
  );
};

export default NewList;
