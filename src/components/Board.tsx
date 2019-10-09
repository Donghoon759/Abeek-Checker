import React from 'react';
import styled from 'styled-components';
import Semester from './Semester/Semester';

// interface BoardProps {
//   children: JSX.Element[] | JSX.Element;
// }

const StyledBoard = styled.div`
  background-color: #3179ba;
  overflow-y: hidden;
  padding: 5px;
  color: #393939;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;

const Board: React.FC = () => {
  return (
    <StyledBoard>
      <Semester />
    </StyledBoard>
  );
};

export default Board;
