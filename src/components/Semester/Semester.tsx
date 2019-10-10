import React from 'react';
import styled from 'styled-components';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';
import Subject from '../Subject/Subject';

interface SemesterProps {}

const Semester = () => {
  return (
    <>
      <SemesterWrapper>
        <SemesterHeader
          title={'1학년 1학기'}
          totalCredit={21}
          totalMajorCredit={3}
          totalMajorBaseCredit={0}
          totalSoyangCredit={0}
          totalDesignCredit={2}
        />
        <Subject></Subject>
        <SemesterFooter></SemesterFooter>
      </SemesterWrapper>
    </>
  );
};

export default Semester;
