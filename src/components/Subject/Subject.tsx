import React from 'react';
import styled from 'styled-components';
import SubjectWrapper from './SubjectWrapper';
import SubjectHeader from './SubjectHeader';
import SubjectFooter from './SubjectFooter';

const Subject: React.FC = () => {
  return (
    <SubjectWrapper>
      <SubjectHeader
        title={'1학년 1학기'}
        category={'전공'}
        subjectCredit={3}
        subjectMajorCredit={3}
        subjectMajorBaseCredit={0}
        subjectSoyangCredit={0}
        subjectDesignCredit={2}
      ></SubjectHeader>
      <SubjectFooter></SubjectFooter>
    </SubjectWrapper>
  );
};

export default Subject;
