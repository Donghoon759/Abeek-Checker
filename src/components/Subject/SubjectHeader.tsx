import React from 'react';
import {
  StyledSubjectHeader,
  StyledSubjectTitle,
  RightContent,
  Detail,
} from '../../styles/Component';

interface SubjectHeaderProps {
  title: string;
  category: string;
  subjectCredit: number;
  subjectMajorCredit?: number;
  subjectMajorBaseCredit?: number;
  subjectSoyangCredit?: number;
  subjectDesignCredit?: number;
}

const SubjectHeader = (props: SubjectHeaderProps) => {
  return (
    <>
      <StyledSubjectHeader>
        <StyledSubjectTitle>{props.title}</StyledSubjectTitle>
        <RightContent>
          {props.category} {props.subjectCredit}학점
        </RightContent>
      </StyledSubjectHeader>
    </>
  );
};

SubjectHeader.defaultProps = {
  title: '기초 프로그래밍',
  category: '전공',
  subjectCredit: 3,
  subjectMajorCredit: 3,
  // subjectMajorBaseCredit: 0,
  // subjectSoyangCredit: 0,
  // subjectDesignCredit: 0,
};

export default SubjectHeader;
