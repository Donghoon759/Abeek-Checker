import React from 'react';
import Board from './components/Board';
import GlobalStyle from './components/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Board />
    </>
  );
};

export default App;
