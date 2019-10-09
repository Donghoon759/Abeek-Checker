import React from 'react';
import styled from 'styled-components';
import {
  Title,
  SubContent,
  RightContent,
  CenterContent,
  SubHeader,
  StyledSemesterHeader,
  StyledSemesterTitle,
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
      <SubHeader>
        <CenterContent>전공 : {props.totalMajorCredit}/70</CenterContent>
        <CenterContent>
          전공기반 : {props.totalMajorBaseCredit}/22
        </CenterContent>
      </SubHeader>
      <SubHeader>
        <CenterContent>설계 : {props.totalDesignCredit}/16</CenterContent>
        <CenterContent>기본소양 : {props.totalSoyangCredit}/15</CenterContent>
      </SubHeader>
    </>
  );
};

SemesterHeader.defaultProps = {
  title: 'hello',
  totalCredit: 1,
  totalMajorCredit: 1,
  totalMajorBaseCredit: 1,
  totalSoyangCredit: 1,
  totalDesignCredit: 1,
};

export default SemesterHeader;
