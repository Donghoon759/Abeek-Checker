import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Board from './components/Board';
import Modal from './components/Modal/Modal';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <GlobalStyle />
      <Board />
      <Modal />
    </>
  );
};

export default App;
