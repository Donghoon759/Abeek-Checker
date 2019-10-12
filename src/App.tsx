import React from 'react';
import { useSelector } from 'react-redux';
import Board from './components/Board';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  const { data } = useSelector(state => state.data);
  return (
    <>
      <GlobalStyle />
      <Board data={data} />
    </>
  );
};

export default App;
