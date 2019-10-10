import React from 'react';
import SubjectWrapper from './SubjectWrapper';
import SubjectHeader from './SubjectHeader';
import SubjectContent from './SubjectContent';
import SubjectFooter from './SubjectFooter';

const Subject = () => {
  return (
    <SubjectWrapper>
      <SubjectHeader />
      <SubjectContent />
      <SubjectFooter></SubjectFooter>
    </SubjectWrapper>
  );
};

export default Subject;
