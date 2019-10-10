import React from 'react';
import styled from 'styled-components';
import SubjectWrapper from './SubjectWrapper';
import SubjectHeader from './SubjectHeader';
import SubjectFooter from './SubjectFooter';

const Subject = () => {
  return (
    <SubjectWrapper>
      <SubjectHeader></SubjectHeader>
      <SubjectFooter></SubjectFooter>
    </SubjectWrapper>
  );
};

// title={'기초프로그래밍'}
// category={'전공'}
// subjectCredit={3}
// subjectMajorCredit={3}
// subjectMajorBaseCredit={0}
// subjectSoyangCredit={0}
// subjectDesignCredit={2}

export default Subject;
