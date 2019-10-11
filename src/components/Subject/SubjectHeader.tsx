import React, { useState } from 'react';
import {
  StyledSubjectHeader,
  StyledSubjectTitle,
  RightContent,
  Detail,
} from '../../styles/Component';

const SubjectHeader = () => {
  const [title, setTitle] = useState<string>('기초프로그래밍');
  const [category, setsetCategory] = useState<string>('전공');
  const [subjectCredit, setSubjectCredit] = useState<number>(0);

  return (
    <>
      <StyledSubjectHeader>
        <StyledSubjectTitle>{title}</StyledSubjectTitle>
        <RightContent>
          {category} {subjectCredit}학점
        </RightContent>
      </StyledSubjectHeader>
    </>
  );
};

export default SubjectHeader;
