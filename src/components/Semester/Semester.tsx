import React from 'react';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';
import Subject from '../Subject/Subject';
import { SemesterStateType } from '../../store/semester';

type Props = {
  semester: SemesterStateType;
  key: number;
};

const Semester = ({ semester, key }: Props) => {
  return (
    <>
      <SemesterWrapper>
        <SemesterHeader semester={semester} />
        <Subject></Subject>
        <SemesterFooter></SemesterFooter>
      </SemesterWrapper>
    </>
  );
};

export default Semester;
