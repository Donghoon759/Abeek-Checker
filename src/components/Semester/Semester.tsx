import React from 'react';
import styled from 'styled-components';
import SemesterHeader from './SemesterHeader';
import SemesterFooter from './SemesterFooter';
import SemesterWrapper from './SemesterWrapper';

interface SemesterProps {}

const Semester = () => {
  return (
    <>
      <SemesterWrapper>
        <SemesterHeader></SemesterHeader>
        {/* <SemesterHeader
          title={'1학년 1학기'}
          totalCredit={21}
          totalMajorCredit={3}
          totalMajorBaseCredit={0}
          totalSoyangCredit={0}
          totalDesignCredit={2}
        /> */}
        <SemesterFooter></SemesterFooter>
      </SemesterWrapper>
    </>
  );
};

export default Semester;
