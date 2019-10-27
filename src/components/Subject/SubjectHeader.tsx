import React, { useState } from 'react';
import {
  StyledSubjectHeader,
  StyledSubjectTitle,
  RightContent,
  Detail,
} from '../../styles/Component';

type Props = {
  subject: {
    id: number;
    parentId: number;
    title: string;
    category: string;
    subjectCredit: number;
    subjectMajorCredit: number;
    subjectMajorBaseCredit: number;
    subjectSoyangCredit: number;
    subjectDesignCredit: number;
  };
};

const SubjectHeader = ({ subject }: Props) => {
  const [title, setTitle] = useState<string>(subject.title);
  const [category, setsetCategory] = useState<string>(subject.category);
  const [subjectCredit, setSubjectCredit] = useState<number>(
    subject.subjectCredit,
  );
  const [subjectMajorCredit, setSubjectMajorCredit] = useState<number>(
    subject.subjectMajorCredit,
  );
  const [subjectMajorBaseCredit, setSubjectMajorBaseCredit] = useState<number>(
    subject.subjectMajorBaseCredit,
  );
  const [subjectSoyangCredit, setSubjectSoyangCredit] = useState<number>(
    subject.subjectSoyangCredit,
  );
  const [subjectDesignCredit, setSubjectDesignCredit] = useState<number>(
    subject.subjectDesignCredit,
  );

  return (
    <>
      <StyledSubjectHeader>
        <StyledSubjectTitle>{title}</StyledSubjectTitle>
        {subjectMajorCredit !== 0 && (
          <RightContent>전공 {subjectMajorCredit}학점</RightContent>
        )}
        {subjectMajorBaseCredit !== 0 && (
          <RightContent>전공기반 {subjectMajorBaseCredit}학점</RightContent>
        )}
        {subjectSoyangCredit !== 0 && (
          <RightContent>기본소양 {subjectSoyangCredit}학점</RightContent>
        )}
        {subjectDesignCredit !== 0 && (
          <RightContent>설계 {subjectDesignCredit}학점</RightContent>
        )}
      </StyledSubjectHeader>
    </>
  );
};

export default SubjectHeader;
