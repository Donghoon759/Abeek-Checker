import React from 'react';
import {
  Title,
  RightContent,
  CenterContent,
  ContentRow,
  StyledSemesterHeader,
} from '../../styles/Component';

// 총 학점, 전공, 전공기반, 기본소양, 설계
interface SemesterHeaderProps {
  title: string;
  totalCredit: number;
  totalMajorCredit: number;
  totalMajorBaseCredit: number;
  totalSoyangCredit: number;
  totalDesignCredit: number;
}

const SemesterHeader = (props: SemesterHeaderProps) => {
  return (
    <>
      <StyledSemesterHeader>
        <Title>{props.title}</Title>
        <RightContent>총 {props.totalCredit}/150학점</RightContent>
      </StyledSemesterHeader>
      <ContentRow>
        <CenterContent>전공 : {props.totalMajorCredit}/70</CenterContent>
        <CenterContent>
          전공기반 : {props.totalMajorBaseCredit}/22
        </CenterContent>
      </ContentRow>
      <ContentRow>
        <CenterContent>설계 : {props.totalDesignCredit}/16</CenterContent>
        <CenterContent>기본소양 : {props.totalSoyangCredit}/15</CenterContent>
      </ContentRow>
    </>
  );
};

SemesterHeader.defaultProps = {
  title: '1학년 1학기',
  totalCredit: 21,
  totalMajorCredit: 3,
  totalMajorBaseCredit: 0,
  totalSoyangCredit: 0,
  totalDesignCredit: 2,
};

export default SemesterHeader;
