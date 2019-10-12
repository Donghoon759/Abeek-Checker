import React from 'react';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';
import Subject from '../Subject/Subject';

interface SemesterProps {}

const Semester = ({ semester }) => {
  return (
    <>
      <SemesterWrapper>
        <SemesterHeader />
        <Subject></Subject>
        <SemesterFooter></SemesterFooter>
      </SemesterWrapper>
    </>
  );
};

export default Semester;
