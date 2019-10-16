import React, { useState } from 'react';
import {
  StyledSubjectHeader,
  StyledSubjectTitle,
  RightContent,
  Detail,
} from '../../styles/Component';

type Props = {
  titleProp: string;
  categoryProp: string;
  subjectCreditProp: number;
};

const SubjectHeader = ({
  titleProp,
  categoryProp,
  subjectCreditProp,
}: Props) => {
  const [title, setTitle] = useState<string>('기초프로그래밍');
  const [category, setsetCategory] = useState<string>('전공');
  const [subjectCredit, setSubjectCredit] = useState<number>(0);

  return (
    <>
      <StyledSubjectHeader>
        <StyledSubjectTitle>{titleProp}</StyledSubjectTitle>
        <RightContent>
          {categoryProp} {subjectCreditProp}학점
        </RightContent>
      </StyledSubjectHeader>
    </>
  );
};

export default SubjectHeader;
