import React from 'react';
import styled from 'styled-components';
import Semester from './Semester/Semester';
import useSubjects from '../hooks/useSubjects';
import { SemesterStateType } from '../store/semester';

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

type SemesterComponentType = {
  semester: SemesterStateType;
  key: number;
};

const Board = () => {
  const subjects = useSubjects();
  return (
    <StyledBoard>
      {subjects.map((subject: any) => {
        return <Semester semester={subject} key={subject.id} />;
      })}
    </StyledBoard>
  );
};

export default Board;
