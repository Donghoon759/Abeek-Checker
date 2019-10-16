import React from 'react';
import styled from 'styled-components';
import Semester from './Semester/Semester';
import useSemesters from '../hooks/useSemesters';
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

// type SemesterComponentType = {
//   semester: SemesterStateType;
//   key: number;
// };

const Board = () => {
  const semesters = useSemesters();
  const subjects = useSubjects();
  return (
    <StyledBoard>
      {semesters.map((semester: any) => {
        return (
          <Semester semester={semester} subjects={subjects} key={semester.id} />
        );
      })}
    </StyledBoard>
  );
};

export default Board;
