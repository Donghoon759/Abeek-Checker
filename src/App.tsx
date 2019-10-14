import React from 'react';
import { useSelector } from 'react-redux';
import Board from './components/Board';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Board />
    </>
  );
};

export default App;
