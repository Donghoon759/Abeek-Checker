import React from 'react';
import styled from 'styled-components';
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
      {props.subjectMajorCredit && (
        <Detail>전공 {props.subjectMajorCredit}학점</Detail>
      )}
      {props.subjectMajorBaseCredit && (
        <Detail>전공기반 {props.subjectMajorBaseCredit}학점</Detail>
      )}
      {props.subjectSoyangCredit && (
        <Detail>기본소양 {props.subjectSoyangCredit}학점</Detail>
      )}
      {props.subjectDesignCredit && (
        <Detail>설계 {props.subjectDesignCredit}학점</Detail>
      )}
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
